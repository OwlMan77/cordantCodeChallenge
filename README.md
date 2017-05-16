#Cordant 

##Planning

###Back-End

*_Possible models_*

Client

* Name - String
* Postcode - String

Candidates

* Name 	 - String
* Picture  - String - URL
* Postcode - String 
* Mode of Transport - Array of Objects 
	[{
	* Name of Transport - String   
	* Speed - Number - Float
	}]

##Front-End 

###MVP

Spec Requirements:

* Needs to use an external API


###Planned stack

*Stack*

* MEAN Stack
* Materialise CSS framework
* Mocha

*Views*

* Client Index 
* Client Show
	* Centers the map on location 
	* Shows nearby Candidates
	* Candidates index will need to be made on this page too!
* Candidate Show (non-MVP)

 
*APIs*

* Postcode.io 
* Google Maps
* Ajax

###WireFrames

![Client Index](https://lh3.googleusercontent.com/htNhGF2s4R5_hb8tzZSY1KLo4AI9yTB_jDs9CmHT6QCbYQ15pOyQCMJjzgMImuuXnqrWoP6e49b-7--ri2GzDmDvIhKYguCSU0nH50O4iQ-GjOTwsHaVxF2A2h9jVgG6D3KsM5x9jxTrq9oDrgQwyXPWssZtL51vxnlysXhD6PU4Pwc4leuRu0YCqFLLpm_IoSV_CAlsM6coye7Bxug43mkETAytksLe-eM8MF6ewLNs4j265qhlMrNqkKVTUogAx4jcpopMMXAxuoZr4Ql5a7Bi8FR6nbA_sDE8e77DPu4OS-M-wsiYoBxA_MGLlklH2G0pAh9BPOtL0J06ttNu2ZG5g40mxqppkyuvjQksDflwq-PbE0vAkYtK8LQJmv91a-lSnGymDjAmbpTt-GlBcjwYxTIgqFoZXdARWASbB0lZIpUuc1r34laVNhi0m31J18bSP01JT9DXCpo94YxlU52X7IScsZ-H3kdEMP_2vFZ-6vwVXQ9yMco6mVsZ7aW2b60lRPTlRC25CqXMFedT8WRh28yota2paY2MzQF8UcMEZbGNtMEVxJvHDtV-LOhHrictr8k9=w1440-h739)

![Client Show](https://lh3.googleusercontent.com/Rz5x7njHHZh-kbuB2aPlSRf-IP2uXdZgXyRffME__MdRZDbD8xzCij-C3oWscHYpyjInSl-JvSI3PU4aZWezRE7sDmKoy83kL6jAg_DO2FcZbK8QmRRuI0RKCY59Dy8r499Lq66jo0qgFEDo678sPIgTGe2udyUwccHMwxALzX3iwoDWQzO4D2aU-SPztgDdyiDLqcUvBZriFtGrFDT2d2u7egasaoE2ya30Z1iqTutrQACbX9KPOGUYu_hi_tMmDyS3M6uEKjZjiWBKhNdkhr0ebmfmR1jvg1zydlA4_tE_7_CMLaYeDo6QhcueCiIetiovsAPHWXjP5aenZqRIsJe2E73VFBolqj3PRzC01UWjGPbP3wleLeoPE07TxdqgKA4JvWjPs2FrHRAkMMZyt6Lg5Tn2qKVvn3zzTlknoe65dBPFtddkeKE3CU8Nb5bywn0kMREvBL2EoY4bdv0BFbNFE-vEDOe780RxR1BuVoRtV7zWg_JDwdB9rgozuAa2FOZeU7TXlhkntPyF7vC3VC-K5PHKGN9frDE5OcsFruqOqszs5dbsLrd9X-ab2QjFbYTRTWJs=w1440-h739)