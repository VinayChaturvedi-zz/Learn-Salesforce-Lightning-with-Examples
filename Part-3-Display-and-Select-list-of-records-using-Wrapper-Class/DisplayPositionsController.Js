/*
 * DISCLAIMER:
THIS CODE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, 
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * */
/************************************************************
 Lightning Controller  Details
 Name: DisplayPositionsController.js
 Type: Lightning Controller 
 Purpose: Controller for  lightning component 
		  DisplayPositions.cmp
 ***********************************************************/
({
    doInit : function(component, event, helper) {
        helper.getPosition(component);
    },
    
    doSomething : function(component, event, helper) {
        
        var lstPositions = component.get("v.lstPositions");
        
        //To check if list is not empty or null
        if(!$A.util.isEmpty(lstPositions) && !$A.util.isUndefined(lstPositions)){
            
            //Calling the Apex Function
            var action = component.get("c.performAction");
                                  
            //Json Encode to send the data to Apex Class
            var positionRecords = JSON.stringify(lstPositions);
            //Setting the Apex Parameter
            action.setParams({
                positionRecords : positionRecords
            });
            
            //Setting the Callback
            action.setCallback(this,function(a){
                //get the response state
                var state = a.getState();
                
                //check if result is successfull
                if(state == "SUCCESS"){
                    
                    //Perform Action after the result
                    alert('Success in calling server side action');
                    
                } else if(state == "ERROR"){
                    alert('Error in calling server side action');
                }
            });
            
            //adds the server-side action to the queue        
            $A.enqueueAction(action);
            
        }
        
        
    }
})
