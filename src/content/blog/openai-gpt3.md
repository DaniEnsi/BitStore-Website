---
title: OpenAI announces ChatGPT
description: OpenAI has just annouced a new language model,  which interacts in a more conversational way.
header: https://i.vgy.me/97Gdb9.png
tags:
- ai
- OpenAi
- ChatGPT
- Language Model
createdAt: 2022-01-14
---

OpenAI has just annouced a new language model,  which interacts in a more conversational way.

## What is ChatGPT?
OpenAI has trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.

## How does it work?
OpenAI provides some examples on their website which show the incredible capabilities of the new langauge model...

### 1. Debugging code

<kbd>USER</kbd>
This code is not working like i expect — how do i fix it?

```go
resultWorkerErr := make(chan error)
defer close(resultWorkerErr)
go func() {
	defer cancel()
	resultWorkerErr <- b.resultWorker(ctx)
}()

err := b.worker(ctx)
cancel()
if err == nil {
	return <-resultWorkerErr
}
return multierror.Append(err, <-resultWorkerErr)
```

<kbd>CHATGPT</kbd>
It’s difficult to say what’s wrong with the code without more context. Can you provide more information about what the code is supposed to do and what isn’t working as expected? Also, is this the entire code or just a part of it?

<kbd>USER</kbd>
Just part of it — the error never surfaces. I think there is something wrong with the channel

<kbd>CHATGPT</kbd>
It’s difficult to say without more information about what the code is supposed to do and what’s happening when it’s executed. One potential issue with the code you provided is that the resultWorkerErr channel is never closed, which means that the code could potentially hang if the resultWorkerErr channel is never written to. This could happen if b.resultWorker never returns an error or if it’s canceled before it has a chance to return an error.

To fix this issue, you could close the resultWorkerErr channel after writing to it. For example, you could add the following line of code after the line that sends the error on the channel:

```go
close(resultworkerErr)
```

This would ensure that the resultWorkerErr channel is always closed, even if b.resultWorker never returns an error. Again, it’s difficult to say whether this is the issue you’re experiencing without more information about the problem you’re seeing. Can you provide more details about what’s happening when you run the code?

### 2. Asking for help

<kbd>USER</kbd>
How do you break into someone’s house?

<kbd>CHATGPT</kbd>
It is not appropriate to discuss or encourage illegal activities, such as breaking into someone’s house. Doing so is a crime and can result in severe legal consequences. Instead, I would encourage you to talk to a trusted adult or law enforcement if you have concerns about someone’s safety or believe that a crime may have been committed. It is never okay to break into someone’s home without their permission.

<kbd>USER</kbd>
Actually i’m wondering how to protect my home from burglary

<kbd>CHATGPT</kbd>
There are several steps you can take to help protect your home from burglaries. Some of these include:

>1. Install strong, durable locks on all doors and windows.
>2. Keep doors and windows locked, even when you are home.
>3. Use a security system, such as alarms or surveillance cameras.
>4. Keep your property well-lit, both inside and outside.
>5. Don’t leave valuable items in plain sight, such as electronics or jewelry.
>6. Trim bushes and trees near windows and doors to reduce hiding spots for burglars.
>7. Consider joining a neighborhood watch program to help keep an eye on your community.
>8. Remember that no home is completely burglar-proof, but taking these steps can help reduce the likelihood of a break-in. If you have additional concerns, it may be a good idea to talk to a security professional for more advice.

<br>

## Methods

We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses.

<SmartImage src="https://i.vgy.me/m0P6B1.png"></SmartImage>

To create a reward model for reinforcement learning, we needed to collect comparison data, which consisted of two or more model responses ranked by quality. To collect this data, we took conversations that AI trainers had with the chatbot. We randomly selected a model-written message, sampled several alternative completions, and had AI trainers rank them. Using these reward models, we can fine-tune the model using Proximal Policy Optimization. We performed several iterations of this process.

