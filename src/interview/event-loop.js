/**
Stack
Function calls form a stack of frames.

function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

console.log(bar(7)) //returns 42
When calling bar, a first frame is created containing bar's arguments and local variables. 
When bar calls foo, a second frame is created and pushed on top of the first one containing foo's arguments and local variables. 
When foo returns, the top frame element is popped out of the stack (leaving only bar's call frame). 
When bar returns, the stack is empty. 

Heap
Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

Queue
A JavaScript runtime uses a message queue, 
which is a list of messages to be processed. 
Each message has an associated function which gets called in order to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

Event loop
The event loop got its name because of how it's usually implemented, which usually resembles:

while (queue.waitForMessage()) {
  queue.processNextMessage()
}
queue.waitForMessage() waits synchronously for a message to arrive (if one is not already available and waiting to be handled).

"Run-to-completion"
Each message is processed completely before any other message is processed.

This offers some nice properties when reasoning about your program, including the fact that whenever a function runs, it cannot be pre-empted and will run entirely before any other code runs (and can modify data the function manipulates). This differs from C, for instance, where if a function runs in a thread, it may be stopped at any point by the runtime system to run some other code in another thread.

A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the "a script is taking too long to run" dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.

Adding messages
In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. 
If there is no listener, the event is lost. 
So a click on an element with a click event handler will add a message—likewise with any other event.

*** The function setTimeout is called with 2 arguments: a message to add to the queue, 
and a time value (optional; defaults to 0). 
The time value represents the (minimum) delay after which the message will actually be pushed into the queue. 
If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. 
However, if there are messages, the setTimeout message will have to wait for other messages to be processed. 
For this reason, the second argument indicates a minimum time—not a guaranteed time.

Here is an example that demonstrates this concept (setTimeout does not run immediately after its timer expires):


*/