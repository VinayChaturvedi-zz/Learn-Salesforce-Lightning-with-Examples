
## Display and Select list of records using Wrapper Class in Lightning Component
### Business Case:
Adam is working as a Senior Application Developer in Universal Containers. Company wants to move their traditional (classic version )recruitment app to lighting. Adam needs to do a Proof of Concept by building a custom lighting component for creating the Candidate’s record into Salesforce. Now that he has created the first and second part which is explained here,He would like to showcase even users know how to display a list of records and select couple of them and bring them into  Apex and perform any action they want.
### Solution:
Adam decides to show position records and decided to create the flow in such a way that the wrapper is used to display the list of positions and wrapper is used again to perform apex operations for selected records.Adam just add a debug log in Apex for demonstrate purposes however he can do any apex operation there as per the client requirements later.

Before getting started,Adam makes sure that he doesn’t miss any pre-requisites mentioned here.Below are the steps Adam takes for creating the solution after completing the pre-requisites.If you have followed my previous blogs,then you just need to update the components and follow these steps(Please note that if you just copy paste the complete code then you need not follow my previous blog,but I would insist you to do so if you want to learn in details):
- Create 3-4 dummy records for position object for demo purpose.
- Create New Lightning Component to display and select the list of position records.
- Create a common wrapper class to define the wrapper.Also,We would add all the wrapper classes here in future.
- Create new apex class to add the apex logic for this newly created lightning component.
- Send data into JSON format and deserialize the JSON in apex class.
- Test and host lightning component in app(ManageCandidate.app) and debug logs.
For more details,Please check the blog here.

