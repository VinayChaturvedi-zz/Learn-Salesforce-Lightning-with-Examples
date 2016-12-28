## Select and Export records in Lightning Component
### Business Case:
Adam is working as a Senior Application Developer in Universal Containers. Company wants to move their traditional (classic version )recruitment app to lighting. Adam needs to do a Proof of Concept by building a custom lighting component for creating the Candidate’s record into Salesforce. Now that he has created the first ,second and third part which is explained here,He would like to showcase even users know how to export a list of selected records using a simple button.
### Solution:
Adam decides to go to the solution via two options :
- First Approach is to add new button which uses a method created in lightning component.
- Another Approach is to add a custom VF page rendered as CSV.

  - In lightning component controller action you can build the url = apex/customvf
  - Use window.open(url) to open the visualforce page in new window.
  - Limitation : VF page can only be used in Salesforce1 and not in lightning component.

Before getting started,Adam makes sure that he doesn’t miss any pre-requisites mentioned here.Below are the steps Adam takes for creating the solution after completing the pre-requisites.If you have followed my previous blogs,then you just need to update the components and follow these steps(Please note that if you just copy paste the complete code then you need not follow my previous blog,but I would insist you to do so if you want to learn in details):
- Create 3-4 dummy records for position object for demo purpose.
- Update Lightning Component to export selected the list records
