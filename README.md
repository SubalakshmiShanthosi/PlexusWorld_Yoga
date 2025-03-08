# PlexusWorld_Yoga
CreateHerFest - Hack For Social Good - Yoga Posture Detection and Breathing Pattern Analyzer

## Inspiration

Lack of time, energy keep women from exercise. Yoga could be the 'Power Hour' - new space for movement and mindfulness. Yoga is a form of moving mediation which integrates mind,body and spirit wellness.

However, Yoga is more than striking the pose. Maintaining correct form is crucial to avoid strains, sprains and chronic aches.

We are building an application which can detect the posture mistakes in real-time and practice pranayama (breathing practice) at home. 

## What it does

We have build AI/ML powered application where the posture of yoga asana is detected in real-time 
and landmarks(a outline skeleton of posture) is drawn along with probability (confidence probability) of correct posture while doing the asana. Correct posture timer is run to track the amount of time the asana is done in right form. 

Breathing pattern analyzer detects is a module with vision capabilities to understand the inhale/exhale breathing patterns and count breaths per minute.

We have utilized retrained MoveNet for the specific subset of asanas (Chair, Cobra, Downward Dog, Shoulder Stand, Tree Pose, No Pose). Integrated with Speech Synthesis Utterance for giving voice instructions on the asana.

## How we built it

Tech stack to build the model vision capabilities -

 UI - React.
 AI/ML Capabilities - TensorFlow (finetuned MoveNet model), Teachable Machine (Breathing pattern analyzer - Web-based tool for creating ML model from visual examples given for training).
Speech Synthesis Utterance for incorporating Text-to-Speech capabilities.

## Challenges we ran into

We had specific challenges while invalidating no-pose detection (When the person is not performing the pose - it should be discounted and not included on pose timer). 
Also, we build small prototypes along the way to use GenAI prompting (to gemini-1.0-vision/groq-vision) to analyze the posture landmarks on average for the webcam screen recording images and give corrective feedback.
However, we faced specific challenges while refining the prompt to learn the next set of posture corrections to be made from currentPose based on just landmarks vector.

## Accomplishments that we're proud of

We are able to develop working prototypes for both yoga breathing pattern analyzer and Yoga Posture detection features. We where able to specifically detect no-pose state on images feed through real-time from webcam and calculate the correct posture for an asana only when the legs, hands and head positions are as per the state for that asana.

## What we learned

We learned about the state-of-the-art models for Posture detection, how to refine the model to a subset of images for a vision model, How to leverage Gen AI capabilities for vision usecase - Specifics of prompting by examples (How to explain the asana- it's form, what wrong posture is- how it would lead to injury) , giving system prompt to give instructions about the intended behaviour as a friendly yoga instructor, How GenAI can do vector metadata search for giving posture correction feedback. 

## What's next for Plexus World!

We have few additional features to be included - Chakra meditation Immersive Experience, Text-to-Speech GenAI models like Whisper for generating voice response for posture correction. 

