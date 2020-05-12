## Translate the Airport Challenge into JavaScript.

### Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

### User Stories
```
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 
```


12 specs, 0 failures

* Feature Test:
    * under normal conditions
        * planes can be instructed to land at an airport
        * planes can be instructed to take off
    * under stormy conditions
        * prevent take off if weather is stormy
        * prevent landing when the weather is stormy
* Plane
    * can land at an airport
    * can instruct to take off from airport
* Airport
    * has no planes by default
    * can clear palnes for landing
    * can clear planes for take off
    * can check for stormy condition
    * under stormy conditions
        * does not clear planes to take off
        * prevents plane from landing
        