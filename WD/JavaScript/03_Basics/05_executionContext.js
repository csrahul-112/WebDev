//Js Execution Context

/**
 * For the first time a Global Execution context({}) is created whether it's empty or not it doesn't matter
 * Js is Single Threaded


 # Execution Contexts
 * GEC
 * Function EC
 * Eval EC {Not much important but we can learn it it will come in later learning like in mongoose etc.}
 
  * in every enviorment GEC is different but the one in browser is important and it is a Window object and one more thing the GEC is stored in this.  
 
 How Code is Executed -> Two Phases
 1st phase : Memory Creation phase{creation phase}(only memory allocation happens in this phase)
 2nd phase : Execution phase
    One Example = ++{
       let val1 = 10;
       let val2 = 5;
       function addNum(){
         let total = num1 + num2;
         return total;
       }
       let result1 = addNum(val1, val2);
       let result2 = addNum(10, 2);
    }++
How this code will run:
    => i) Global Execution creation and it's stored in this

    => ii) Memory Phase: all the variables get memory in this phase no operation is done yet only memory is allocated.
     val1 = undefined;
     val2 = undefined;
     addNum = definition;
     result1 = undefined;
     result2 = undefined;
     => iii) Execution Phase
     val1 = 10;
     val2 = 5;
     addNum => new variable enviormen and  a Execution thread;{
         for this again memory phase and execution phase will be there.
         Memory Phase:
         val1 = undefined;
         val2 = undefined;
         total = undefined;
         Execution phase:
         num1 = 10;
         num2 = 5;
         total = 15;
         then total is returned to Global Execution Context
     }
     after this the new variable and execution thread which was created by addNum is deleted as it's task is finished.

     same as in addNum for result1 in result two again the same procedure will be followed and memory phase and then execution phase is created and task is performed followed by returing value to GEC.

   #Call Stack
   whenever a program is executed a call stack is creaket and it is executed as LIFO structure.
 */