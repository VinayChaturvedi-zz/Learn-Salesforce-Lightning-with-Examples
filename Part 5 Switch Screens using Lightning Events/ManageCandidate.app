<!--
          ** Application Details***
         Name: ManageCandidate
         Type: Lightning Application 
         Purpose: Application to host the lightning components
-->
<aura:application >

    <aura:attribute name="screenName" type="string" 
					default="DisplayPositions"/>
    <aura:attribute name="appliedPosition" type="list" />
    <aura:handler name="changeScreen" 
				  event="c:ChangeScreen" action="{!c.changeScreen}" />
    <aura:handler event="c:ManageData" 
				  action="{!c.getAppliedPositionRecords}" />

    <aura:dependency resource="c:CreateCandidateRecord" />
    <aura:dependency resource="c:DisplayPositions" />
    
    <c:DisplayPositions aura:id="DisplayPositions" class="show"/>
    
    <c:CreateCandidateRecord aura:id="CreateCandidateRecord" 
							 class="hidden" 
							 appliedPosition="{!v.appliedPosition}"/>
       
</aura:application>