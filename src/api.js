
const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 


// Create MG Service
const create_mg_service = (friendlyName) => {
	return client.messaging.services
                .create({friendlyName})
}

// Search for a phone Number
// Get a list of available phone numbers based on area code
const get_phone_numbers = () => {
	console.log("inside api.get_phone_numbers")
	return client.availablePhoneNumbers('US')
	      	 .local
	      	 .list({areaCode: 310, limit: 2})      		
}

// Buy a phonenumber
const buy_phone_numbers = (num) => {
	return client.incomingPhoneNumbers
		     .create({phoneNumber: `${num}`})
		     
}

// Display Results
// Add Phone Numbers to MG Service
const add_phone_number_to_mg_service = (mg_sid, pn_sid) => {
	return client.messaging.services(mg_sid)
                .phoneNumbers
                .create({phoneNumberSid: pn_sid})
}

module.exports = {
	create_mg_service,
	get_phone_numbers,
	buy_phone_numbers,
	add_phone_number_to_mg_service,
}


