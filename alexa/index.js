'use strict';

const Alexa = require('ask-sdk-core');
// use 'ask-sdk' if standard SDK module is installed

// Code for the handlers here

let skill;

exports.handler = async function (event, context) {
  console.log(`REQUEST++++${JSON.stringify(event)}`);
  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        LaunchRequestHandler,
        // MatchtodayIntentHandler,
        // HelpIntentHandler,
        // CancelAndStopIntentHandler,
        // SessionEndedRequestHandler,
      )
      //.addErrorHandlers(ErrorHandler)
      .create();
  }
  
  return skill.invoke(event,context);
}


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Bienvenue au kit alexa manu, vous pouvez dire hello!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Salut manu', speechText)
            .getResponse();
    }
};


const MatchtodayIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};


