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


##Planned stack

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