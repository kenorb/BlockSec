#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

// Smart Contract Name: blocksecchain
// Table struct:
//   certstruct: multi index table to store the certificates
//     prim_key(uint64): primary key
//     fingerprint: the certificate fingerprint
//     grade : the certificate grading (votes)
//     timestamp(uint64): the store the last update block time
// Public method:
//   isnewcert => to check if the given fingerprint has certificate in table or not
// Public actions:
//   gradeCert => put the certificate into the multi-index table and sign by the given account

// Replace the contract class name when you start your own project
class blocksecchain : public eosio::contract {
  private:
    bool isnewcert( idx256 fingerprint ) {
      certtable certobj(_self, _self);
      // get object by secondary key
      auto certificates = certobj.get_index<N(getbyfingerprint)>();
      auto cert = certificates.find(fingerprint);

      return cert == certificates.end();
    }

    /// @abi table
    struct certstruct {
      uint64_t      prim_key;        // primary key
      idx256        fingerprint;     // the certificate fingerprint
      uint64_t      timestamp;       // the store the last update block time
      int32_t       grade;           // grading of the certificate (votes)
      // primary key
      auto primary_key() const { return prim_key; }
      // secondary key: user
      idx256 get_by_fingerprint() const { return fingerprint; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(certstruct), certstruct,
      indexed_by< N(getbyfingerprint), const_mem_fun<certstruct, account_name, &certstruct::get_by_fingerprint> >
      > certtable;

  public:
    using contract::contract;

    /// @abi action
    void gradeCert(idx256 _fingerprint, int32_t gradeDelta) {
      
      certtable obj(_self, _self); // code, scope

      // create new / update certificate
      if (isnewcert(_fingerprint)) {
        // insert new certificate
        obj.emplace( _self, [&]( auto& address ) {
          address.prim_key    = obj.available_primary_key();
          address.fingerprint = _fingerprint;
          address.grade        = gradeDelta;
          address.timestamp   = now();
        });
      } else {
        // get object by secondary key
        auto certs = obj.get_index<N(getbyfingerprint)>();
        auto &cert = certs.get(_fingerprint);
        // update certificate grading
        obj.modify( cert, _self, [&]( auto& address ) {
          address.grade        += gradeDelta;
          address.timestamp   = now();
        });
      }
    }
};

// specify the contract name, and export a public action: gradeCert
EOSIO_ABI( blocksecchain, (gradeCert) )
