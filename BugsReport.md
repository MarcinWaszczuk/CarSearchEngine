# Tivix manual test bug reports

[FE/BE] - Filtering by country does not update available city lists
    
    Description:
    Selecting a country does not drill down the cities list in the dropdown

    Steps to replicate:
    1. Visit: 
    2. Select country of France
    3. Open dropdown for City Filtering

    Actual Result:
    Germany and Poland based cities visible in the dropdown

    Expected Result:
    Only France based cities visible in dropdown


[FE/BE] - Filtering by model does not take effect
    
    Description:
    Selecting a model does not drill down the cars list in the table

    Steps to replicate:
    1. Visit: 
    2. Select any model (prefferable Toyota Aygo for low maintenance costs)
    3. Provide any valid dates for pickup and dropoff dates
    4. Click search button

    Actual Result:
    All possible models are visible in the table

    Expected Result:
    Only Toyota Aygo models should be listed

[FE/BE] - Name and Surname allow for numbers only
    
    Description:
    User is able to provide name and surname as numbers only

    Steps to replicate:
    1. Visit: 
    2. Select any model (prefferable Toyota Aygo for low maintenance costs)
    3. Provide any valid dates for pickup and dropoff dates
    4. Click search button
    5. Click rent for any available cars
    6. Press rent until presented with personal data form
    7. Provide numbers in Name and Surname
    8. Provide valid email and card numbers
    9. Submit form

    Actual Result:
    User is redirected to success page

    Expected Result:
    User should be presented with notification for incorrect data in Name and Surname as well as should not be redirected.


#### Recognising this is an assignment, in order to not make anybody have to go through so much reading, below is a list of other bugs as bulletpoints without all the 'steps to replicate, results and other' sections considered standard for the bug tracking task templates:
BUGS:
- Germainy instead of Germany
- No polish letters - unicode issue
- Pickup dates may be set to past dates
- DJANGO debug mode enabled - if thats end user env then it is a big not
- Misalignments - pages not fitting window - here to reflect on designs if available
- .card-header not matching width of card
- Too big load error on API level sometimes reproducable upon clicking rent
- Card input field not formatting the numbers for card specific formatting
- Email allowing for test@ - not checking for really valid email for eg. JS RFC 5322 compliant regex - /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
- console on rent personal details apparently likes panckaces - lubie placki!!! in console visible - hardcoded as next one
- console on homepage cannot fetch the latest data - this is hardcoded as <script>
        console.error('Cannot fetch latest data')
    </script> in the source
- Something feels odd about <span class="sr-only">(current)</span>
- There is no way for Ursus C360 to be available to rent in central berlin - Umwelt zone - therefore someone should review correctness of data.
- DJANGO Admin panel after trying admin - admin login - password has been blocked by MAC defender - something tells me that panel has admin admin credentials but no further checking - don't want to fight with my defender - its really resistant.
- tivix lab died on me at 21:25 - check logs, server is dying