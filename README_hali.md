Part 1 (60s)
------------------------
### Opening + Problem
* In December 2017, a DNS hijacking attack stole 250K+ USD of ETH through EtherDelta
* In April 2018, a DNS hijacking attack on MyEtherWallet stole 150K+ USD of ETH through MyEtherWallet
* Why do we still have these problems today?


### Solution
* Solution to protect against phishing, dns hijacking, 
* Based on a dynamic, decentralized certificate blacklist.
* Based on certificates instead of URLs

* Implemented in a voting consensus model similar to EOS.
* End-users can up/down vote certificates and this information

### Decentralization / Blockchain
* Centralization requires implicit trust in root certificates.
* 75% of all TLS certificates are issued by 3 CAs - (Symantec, Comodo, GoDaddy).
* In 2001 VeriSign issued spoofed Certificates for Microsoft.
* Today's PKI has a real centralization problem.

----------------------------
Demo (60s)
------------------------


----------------------------
Part 2 (60s)
------------------------

### Impact
* Affects anyone who uses a web browser
* The green padlock is not enough.
* With advent of Let's Encrypt, the green padlock looses it's value.
    * Apple example.




### Scalability
* Works in combo with the green padlock, phishing detector.
* Our solution scales in the same way. Very accessible and easy-to-use.


### Innovation / Competitor analysis
* Metamask, MetaCert, Google Safe Browsing, Ethereum phishing detector.
* All these solutions are URL-based / centralized.
* Our solution is based on certificates.
* Operates at a lower level. Deeper protection.

### Next steps
* Key Revocation.
* Extend usage outside of browser.

----------------------------
Questions & Answers (120s)
----------------------------

### How is key revocation handled ?
* CA revokes key. Revoked on blockchain. No grade required.
* Essentially becomes a ledger of revoked keys

### Difference from PGP
* PGP requires users to build a web-of-trust network
* Our solution does not. Ours is a blockchain counterpart to same problem.

### Difference from Ethereum Phishing Detector / MetaMask
* Is centralized. Single point of failure.
* Is URL based. Our solution is based on certificates. 
* Lower level. Protects against DNS hijacking.

### Difference from Google Safe Browsing
* Centralized - requires trust in Google.
* Is URL based. Our solution is based on certificates. 
* Lower level. Protects against DNS hijacking.

----------------------------
Notes / Links
----------------------------
https://en.wikipedia.org/wiki/Public_key_infrastructure#Blockchain-based_PKI

https://thehackernews.com/2017/04/unicode-Punycode-phishing-attack.html