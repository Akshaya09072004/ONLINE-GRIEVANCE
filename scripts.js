document.addEventListener('DOMContentLoaded', function() {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');

    window.sendMessage = function() {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('You', message);
            userInput.value = '';
            processUserInput(message.toLowerCase());
        }
    };

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === 'You' ? 'user-message' : 'bot-message');
        messageElement.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function processUserInput(input) {
        let response;

        // Rule-based responses
        if (input.includes('depression')) {
            response = "It's important to seek help when you're feeling down. Would you like to talk about what's bothering you?";
        } else if (input.includes('stress')) {
            response = "Stress can be challenging. Try taking deep breaths or speaking to someone you trust. How can I assist you today?";
        } else if (input.includes('anxiety')) {
            response = "Anxiety can be overwhelming, but remember you're not alone. Would you like some tips on how to manage it?";
        } else if (input.includes('help')) {
            response = "I'm here to help. Can you tell me a bit more about what you're going through?";
        } else if (input.includes('grievance')) {
            response = "You can submit your grievance through the grievance page. I'm here to listen if you want to share anything.";
        } else if (input.includes('concern')) {
            response = "If you have a concern, I'm here to listen and support.";
        } else if (input.includes('issue')) {
            response = "Let me know if you're dealing with an issue.";
        } else if (input.includes('question')) {
            response = "Feel free to ask any questions you have.";
        } else if (input.includes('query')) {
            response = "Got a query? I'm here to assist.";
        } else if (input.includes('request')) {
            response = "If you have a request, let me know how I can help.";
        } else if (input.includes('demand')) {
            response = "For urgent needs, I'm here to support.";
        } else if (input.includes('inquiry')) {
            response = "Making an inquiry? I'm here to provide the information you need.";
        } else if (input.includes('detail')) {
            response = "Providing more detail helps me assist you better.";
        } else if (input.includes('clarification')) {
            response = "If you need clarification, just ask.";
        } else if (input.includes('elaboration')) {
            response = "Looking for elaboration? I'm here to assist.";
        } else if (input.includes('explanation')) {
            response = "If you need an explanation, I'm here to help.";
        } else if (input.includes('feedback')) {
            response = "Your feedback is valuable. What would you like to share?";
        } else if (input.includes('suggestion')) {
            response = "I'm here to offer suggestions based on your needs.";
        } else if (input.includes('resource')) {
            response = "If you need resources, I can help you find them.";
        } else if (input.includes('information')) {
            response = "Looking for more information? I'm here to assist.";
        } else if (input.includes('context')) {
            response = "Providing context helps me understand your needs better.";
        } else if (input.includes('update')) {
            response = "If there's an update, please inform me.";
        } else if (input.includes('change')) {
            response = "Need to discuss a change? I'm here to assist.";
        } else if (input.includes('decision')) {
            response = "Struggling with a decision? I'm here to support.";
        } else if (input.includes('choice')) {
            response = "Need help with a choice? I'm here to assist.";
        } else if (input.includes('problem')) {
            response = "Facing a problem? Let me help find a solution.";
        } else if (input.includes('challenge')) {
            response = "If you're facing a challenge, I'm here to assist.";
        } else if (input.includes('assistance')) {
            response = "I'm here to provide assistance with whatever you need.";
        } else if (input.includes('support')) {
            response = "If you need support, I'm here to help.";
        } else if (input.includes('guidance')) {
            response = "Looking for guidance? I'm here to assist.";
        } else if (input.includes('direction')) {
            response = "Need direction? I'm here to help.";
        } else if (input.includes('advice')) {
            response = "If you need advice, feel free to ask.";
        } else if (input.includes('solution')) {
            response = "Looking for a solution? I'm here to help.";
        } else if (input.includes('insight')) {
            response = "If you need insight, I'm here to assist.";
        } else if (input.includes('comment')) {
            response = "I'd love to hear your comments. What do you want to share?";
        } else if (input.includes('report')) {
            response = "Need to make a report? I'm here to help.";
        } else if (input.includes('input')) {
            response = "Your input is valuable. What would you like to share?";
        } else if (input.includes('proposal')) {
            response = "If you have a proposal, I'm here to discuss it.";
        } else if (input.includes('recommendation')) {
            response = "Looking for recommendations? I'm here to assist.";
        } else if (input.includes('observation')) {
            response = "If you have an observation, feel free to share.";
        } else if (input.includes('review')) {
            response = "Need a review? I'm here to help.";
        } else if (input.includes('notification')) {
            response = "If you have a notification, please let me know.";
        } else if (input.includes('alert')) {
            response = "Got an alert? I'm here to assist.";
        } else if (input.includes('adjustment')) {
            response = "Need an adjustment? I'm here to help.";
        } else if (input.includes('confirmation')) {
            response = "If you need confirmation, let me know.";
        } else if (input.includes('strategy')) {
            response = "Looking for a strategy? I'm here to assist.";
        } else if (input.includes('note')) {
            response = "If you have a note, I'm here to listen.";
        } else if (input.includes('notification')) {
            response = "If you have a notification, please let me know.";
        } else if (input.includes('alert')) {
            response = "Got an alert? I'm here to assist.";
        } else if (input.includes('adjustment')) {
            response = "Need an adjustment? I'm here to help.";
        } else if (input.includes('confirmation')) {
            response = "If you need confirmation, let me know.";
        } else if (input.includes('proposal')) {
            response = "If you have a proposal, I'm here to discuss it.";
        } else if (input.includes('strategy')) {
            response = "Looking for a strategy? I'm here to assist.";
        } else if (input.includes('note')) {
            response = "If you have a note, I'm here to listen.";
        } else if (input.includes('alert')) {
            response = "Got an alert? I'm here to assist.";
        } else if (input.includes('notification')) {
            response = "If you have a notification, please let me know.";
        } else if (input.includes('comment')) {
            response = "I'd love to hear your comments. What do you want to share?";
        } else if (input.includes('proposal')) {
            response = "If you have a proposal, I'm here to discuss it.";
        } else if (input.includes('review')) {
            response = "Need a review? I'm here to help.";
        } else if (input.includes('motivation')) {
            response = "Lack of motivation happens to everyone. Do you need advice on how to get back on track?";
        } else if (input.includes('happiness')) {
            response = "I'm glad you're thinking about happiness! What brings you joy?";
        } else if (input.includes('relationship')) {
            response = "Relationships can be complicated. Would you like to share what's on your mind?";
        } else if (input.includes('breakup')) {
            response = "I'm sorry to hear you're going through a breakup. Would you like to talk about it?";
        } else if (input.includes('friendship')) {
            response = "Friendships can be wonderful but also difficult at times. How can I assist with your friendship concerns?";
        } else if (input.includes('failure')) {
            response = "Failure is part of growth. How do you feel about what happened?";
        } else if (input.includes('success')) {
            response = "That's great! Celebrate your success. What was the key to achieving it?";
        } else if (input.includes('anger')) {
            response = "Anger can be hard to manage. Would you like some techniques to calm down?";
        } else if (input.includes('fear')) {
            response = "It's normal to feel fear. Can I help you face what's making you afraid?";
        } else if (input.includes('loss')) {
            response = "Loss can be deeply painful. I'm here if you'd like to talk about it.";
        } else if (input.includes('confidence')) {
            response = "Building confidence takes time. Would you like some tips on improving it?";
        } else if (input.includes('self-esteem')) {
            response = "Low self-esteem can affect many areas of life. How do you usually feel about yourself?";
        } else if (input.includes('sadness')) {
            response = "It’s okay to feel sad sometimes. Do you want to share what's making you feel this way?";
        } else if (input.includes('grief')) {
            response = "Grieving is a process, and it’s important to take time to heal. How are you feeling today?";
        } else if (input.includes('self-doubt')) {
            response = "Self-doubt can be difficult to overcome. How can I help you build more self-confidence?";
        } else if (input.includes('procrastination')) {
            response = "Procrastination can hold you back. Do you need help staying on track?";
        } else if (input.includes('productivity')) {
            response = "Staying productive can be challenging. Would you like some tips on improving your productivity?";
        } else if (input.includes('goal-setting')) {
            response = "Setting goals is an important step in progress. What goals are you working towards?";
        } else if (input.includes('life purpose')) {
            response = "Finding purpose can be deeply fulfilling. What do you think your purpose might be?";
        } else if (input.includes('meditation')) {
            response = "Meditation can help you find peace. Would you like guidance on how to start?";
        } else if (input.includes('breathing exercises')) {
            response = "Breathing exercises can reduce stress. Would you like to try one now?";
        } else if (input.includes('mindfulness')) {
            response = "Mindfulness helps with being present. Would you like tips on practicing mindfulness?";
        } else if (input.includes('exercise')) {
            response = "Exercise is great for both the body and mind. Do you have a fitness routine?";
        } else if (input.includes('nutrition')) {
            response = "Good nutrition is key to well-being. Are you looking for tips on eating healthier?";
        } else if (input.includes('sleep')) {
            response = "Sleep is important for your mental health. How is your sleep routine?";
        } else if (input.includes('relaxation')) {
            response = "Relaxation is crucial for recharging. Would you like suggestions on how to relax?";
        } else if (input.includes('burnout')) {
            response = "Burnout can be exhausting. Do you need help finding ways to recharge?";
        } else if (input.includes('work-life balance')) {
            response = "Maintaining a work-life balance is important. How can I help you find that balance?";
        } else if (input.includes('time management')) {
            response = "Time management can improve productivity. Do you need help planning your day?";
        } else if (input.includes('career')) {
            response = "Career decisions can be daunting. How can I assist with your career goals?";
        } else if (input.includes('job')) {
            response = "Looking for or dealing with a job change? How can I help?";
        } else if (input.includes('promotion')) {
            response = "Congratulations on your promotion! How are you feeling about your new responsibilities?";
        } else if (input.includes('financial stress')) {
            response = "Financial stress can be overwhelming. Would you like to talk about ways to manage it?";
        } else if (input.includes('budgeting')) {
            response = "Budgeting can help ease financial worries. Would you like tips on creating a budget?";
        } else if (input.includes('debt')) {
            response = "Debt can feel heavy. Do you need advice on how to manage it?";
        } else if (input.includes('investing')) {
            response = "Investing is a great way to grow wealth. Are you new to investing or looking for more information?";
        } else if (input.includes('savings')) {
            response = "Building savings provides security. Would you like help setting up a savings plan?";
        } else if (input.includes('retirement')) {
            response = "Planning for retirement is a good idea. Would you like some advice on how to prepare?";
        } else if (input.includes('health')) {
            response = "Your health is important. Are you looking for ways to improve your physical or mental well-being?";
        } else if (input.includes('doctor')) {
            response = "It's always a good idea to consult a doctor when you're feeling unwell. Would you like help finding one?";
        } else if (input.includes('therapy')) {
            response = "Therapy can provide support when you're struggling. Would you like help finding a therapist?";
        } else if (input.includes('support group')) {
            response = "Support groups offer a sense of community. Would you like help finding one?";
        } else if (input.includes('substance abuse')) {
            response = "Overcoming substance abuse is a journey. How can I support you in this process?";
        } else if (input.includes('addiction')) {
            response = "Addiction recovery is possible. Would you like to talk about your experiences or find resources for help?";
        } else if (input.includes('recovery')) {
            response = "Recovery takes time, but you can do it. Would you like some guidance along the way?";
        } else if (input.includes('anger management')) {
            response = "Managing anger is important for your well-being. Would you like some strategies to calm down?";
        } else if (input.includes('coping strategies')) {
            response = "Coping strategies help in tough times. Would you like suggestions for managing your current situation?";
        } else if (input.includes('resilience')) {
            response = "Building resilience helps in bouncing back from challenges. How can I help you strengthen it?";
        } else if (input.includes('communication')) {
            response = "Effective communication is key to relationships. How can I help you improve your communication skills?";
        } else if (input.includes('social anxiety')) {
            response = "Social anxiety can make interactions difficult. Would you like tips on how to manage it?";
        } else if (input.includes('public speaking')) {
            response = "Public speaking can be nerve-wracking. Would you like some advice on how to feel more confident?";
        } else if (input.includes('introversion')) {
            response = "Being an introvert has its strengths. Do you want to talk about managing social expectations?";
        } else if (input.includes('extroversion')) {
            response = "Extroversion often means gaining energy from socializing. How can I help you leverage that?";
        } else if (input.includes('self-care')) {
            response = "Self-care is essential. Would you like some suggestions on how to practice it?";
        } else if (input.includes('empathy')) {
            response = "Empathy helps us connect with others. How can I help you cultivate more empathy?";
        } else if (input.includes('assertiveness')) {
            response = "Being assertive helps in expressing yourself. Would you like advice on becoming more assertive?";
        } else if (input.includes('boundaries')) {
            response = "Setting boundaries is key to healthy relationships. How can I help you establish them?";
        } else if (input.includes('family')) {
            response = "Family relationships can be complex. What's on your mind regarding your family?";
        } else if (input.includes('parenting')) {
            response = "Parenting comes with many challenges. How can I assist with any concerns you may have?";
        } else if (input.includes('childcare')) {
            response = "Finding good childcare is important. Would you like help exploring your options?";
        } else if (input.includes('trust')) {
            response = "Trust is vital in any relationship. Would you like advice on how to build or regain it?";
        } else if (input.includes('jealousy')) {
            response = "Jealousy can be difficult to deal with. Would you like tips on how to manage it?";
        } else if (input.includes('regret')) {
            response = "Regret can weigh heavily on you. Would you like to talk about how you're feeling?";
        } else if (input.includes('guilt')) {
            response = "Guilt is a natural feeling, but it's important to move forward. How can I support you?";
        } else if (input.includes('forgiveness')) {
            response = "Forgiveness can bring peace. Are you struggling to forgive someone, or yourself?";
        } else if (input.includes('trust issues')) {
            response = "Trust issues can damage relationships. Would you like advice on rebuilding trust?";
        } else if (input.includes('anger issues')) {
            response = "Managing anger is important for your well-being. Would you like strategies for controlling it?";
        } else if (input.includes('bullying')) {
            response = "Bullying is a serious issue. Would you like advice on how to deal with it?";
        } else if (input.includes('peer pressure')) {
            response = "Peer pressure can be tough to handle. Would you like help resisting it?";
        } else if (input.includes('longevity')) {
            response = "Living a long, healthy life is a common goal. Would you like advice on maintaining longevity?";
        } else if (input.includes('technology')) {
            response = "Technology can be both a help and a hindrance. How do you feel about its role in your life?";
        } else if (input.includes('social media')) {
            response = "Social media can affect mental health. Do you feel it's impacting you negatively?";
        } else if (input.includes('cyberbullying')) {
            response = "Cyberbullying is a growing concern. Would you like help dealing with it?";
        } else if (input.includes('identity')) {
            response = "Discovering your identity is a personal journey. How can I support you in exploring who you are?";
        } else if (input.includes('loneliness')) {
            response = "Feeling lonely can be tough. Would you like to talk about how you're feeling?";
        } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
            response = "Hi there! How can I assist you today?";
        } else if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('goodbye')) {
            response = "Goodbye! Take care, and feel free to reach out if you need anything.";
        } else if (input.toLowerCase().includes('okay') || input.toLowerCase().includes('ok')) {
            response = "Got it! Is there anything else I can help you with?";
        } else if (input.toLowerCase().includes('what to do') || input.toLowerCase().includes('help')) {
            response = "I'm here to help! Could you tell me a little more about what you're facing?";
        } else if (input.toLowerCase().includes('how are you')) {
            response = "I'm just a bot, but thank you for asking! How are *you* feeling?";
        } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi') || input.toLowerCase().includes('hey')) {
            response = "Hey there!How are you doing today? Anything on your mind?";
        } else if (input.toLowerCase().includes('bye') || input.toLowerCase().includes('goodbye') || input.toLowerCase().includes('see you')) {
            response = "Goodbye! It was nice talking to you. Take care!";
        } else if (input.toLowerCase().includes('okay') || input.toLowerCase().includes('ok') || input.toLowerCase().includes('alright')) {
            response = "Alright, got it! Anything else you'd like to chat about?";
        } else if (input.toLowerCase().includes('what should i do') || input.toLowerCase().includes('help me') || input.toLowerCase().includes('i need help')) {
            response = "I'm here for you! Can you tell me a bit more about what you need help with?";
        } else if (input.toLowerCase().includes('how are you') || input.toLowerCase().includes('how’s it going') || input.toLowerCase().includes('what’s up')) {
            response = "Aw, that's sweet of you to ask! I'm just a bot, but I’m ready to help you. How are *you* doing?";
        } else if (input.toLowerCase().includes('i’m feeling down') || input.toLowerCase().includes('depressed') || input.toLowerCase().includes('sad')) {
            response = "I'm really sorry you’re feeling this way. Would you like to talk about what’s been going on?";
        } else if (input.toLowerCase().includes('stressed out') || input.toLowerCase().includes('stressed') || input.toLowerCase().includes('under pressure')) {
            response = "Stress can be tough.  Want to try some relaxation exercises together?";
        } else if (input.toLowerCase().includes('i’m anxious') || input.toLowerCase().includes('anxiety') || input.toLowerCase().includes('worried')) {
            response = "Anxiety can feel overwhelming. How are you feeling right now? Would you like some tips to manage it?";
        } else if (input.toLowerCase().includes('i’ve lost someone') || input.toLowerCase().includes('grieving') || input.toLowerCase().includes('dealing with loss')) {
            response = "I’m really sorry for your loss. Grieving takes time, but I’m here if you need someone to talk to.";
        } else if (input.toLowerCase().includes('i’m unmotivated') || input.toLowerCase().includes('no motivation') || input.toLowerCase().includes('can’t focus')) {
            response = "I totally get it. Staying motivated can be tough sometimes. What’s something you’d like to get back on track with?";
        } else if (input.toLowerCase().includes('i feel lonely') || input.toLowerCase().includes('alone') || input.toLowerCase().includes('nobody cares')) {
            response = "Feeling lonely can be really hard. Want to chat about what’s been going on?";
        } else if (input.toLowerCase().includes('relationship problems') || input.toLowerCase().includes('issues with my partner') || input.toLowerCase().includes('relationship trouble')) {
            response = "Relationships can be complicated, right? Is there something on your mind you’d like to share?";
        } else if (input.toLowerCase().includes('just broke up') || input.toLowerCase().includes('heartbroken') || input.toLowerCase().includes('ended my relationship')) {
            response = "I’m so sorry you're going through this. Would you like to talk about how you're feeling?";
        } else if (input.toLowerCase().includes('friend issues') || input.toLowerCase().includes('problems with friends') || input.toLowerCase().includes('losing friends')) {
            response = "Friendships can be so important but also tricky at times. 👭 How can I help you?";
        } else if (input.toLowerCase().includes('feeling like a failure') || input.toLowerCase().includes('failed at something') || input.toLowerCase().includes('failure')) {
            response = "Failure is tough, but it's also a learning experience. Want to talk about what happened?";
        } else if (input.toLowerCase().includes('success') || input.toLowerCase().includes('i succeeded') || input.toLowerCase().includes('achieved my goal')) {
            response = "That’s fantastic! Celebrate your achievement! What's your next goal?";
        } else if (input.toLowerCase().includes('angry') || input.toLowerCase().includes('furious') || input.toLowerCase().includes('mad')) {
            response = "It’s okay to feel angry. Do you want to talk about what’s upsetting you?";
        } else if (input.toLowerCase().includes('scared') || input.toLowerCase().includes('afraid') || input.toLowerCase().includes('fearful')) {
            response = "Fear is natural, but sharing it can help. What are you feeling afraid of?";
        } else if (input.toLowerCase().includes('low self esteem') || input.toLowerCase().includes('self worth') || input.toLowerCase().includes('feel worthless')) {
            response = "Your self-worth is important. How do you feel about yourself lately?";
        } else if (input.toLowerCase().includes('procrastinating') || input.toLowerCase().includes('i keep putting things off') || input.toLowerCase().includes('i’m procrastinating')) {
            response = "Procrastination can be tough to overcome. How can I help you stay focused?";
        } else if (input.toLowerCase().includes('life purpose') || input.toLowerCase().includes('why am i here') || input.toLowerCase().includes('what’s my purpose')) {
            response = "Finding your life’s purpose is a big journey. Want to explore your thoughts on this?";
        } else {
            response = "I’m here for you. Can you tell me more about what’s on your mind?";
        }

            

        setTimeout(function() {
            appendMessage('SAS', response);
        }, 500);
    }
});

