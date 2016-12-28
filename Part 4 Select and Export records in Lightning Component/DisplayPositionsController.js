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
        
        
    },
    /********************************************************
     * export : Function used to export the selected records 
     * ***************************************************/
    
    export : function(component, event, helper) {
        var lstPositions = component.get("v.lstPositions");
        var PositionTitle = 'Selected Position';
        var data = [];
        var headerArray = [];
        var csvContentArray = [];
        //Provide the title 
        var CSV = 'rnSelected Positionrn';
        
        //Fill out the Header of CSV
		headerArray.push('S.NO');
        headerArray.push('Title');
        headerArray.push('STATUS');
        data.push(headerArray);

        var sno = 0;
        for(var i=0;i<lstPositions.length;i++){
            
            //Check for records selected by the user
            if(lstPositions[i].isSelected){
                //Initialize the temperory array
                var tempArray = [];
                //use parseInt to perform math operation
                sno = parseInt(sno) + parseInt(1);
                tempArray.push('"'+sno+'"');
                tempArray.push('"'+lstPositions[i].positionTitle+'"');
                tempArray.push('"'+lstPositions[i].status+'"');
                data.push(tempArray);
            }
            
        }
        
        for(var j=0;j<data.length;j++){
            var dataString = data[j].join(",");
            csvContentArray.push(dataString);
        }
        var csvContent = CSV + csvContentArray.join("rn");
        
        //Generate a file name
        var fileName = "MyReport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += PositionTitle.replace(/ /g,"_");   
        fileName += ".csv";
        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        
        if (navigator.msSaveBlob) { // IE 10+
            console.log('----------------if-----------');
            var blob = new Blob([csvContent],{type: "text/csv;charset=utf-8;"});
            console.log('----------------if-----------'+blob);
        	navigator.msSaveBlob(blob, fileName);
        }
        else{
            // Download file
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    
            var link = document.createElement("a");

            //link.download to give filename with extension
            //link.download = fileName;
            link.setAttribute('download',fileName);
            //To set the content of the file
            link.href = uri;
            
            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:hidden";
            
            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          
    	}
    }
})
