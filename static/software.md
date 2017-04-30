---
title: Software 
layout: master
---

If code is the steel of the 21st century - the master resource on which all others depend - then
control over the means for production has never been more accessible. All you need is a computer
and these are now two-a-penny. It is amazing to think that we now struggle to *get rid of* 
computing machines that are thousands of times more powerful that anything on offer just a few decades ago.

Now that everyone has a computer available to them, more often than not in their pocket, 
it is easy to forget how empowering the pioneers of *personal computer* (PCs) thought 
they would be:

> It's hard for many people today
> to imagine what the world was like when only big business and big government ran all
> the computers. Let's just say, you couldn't get much done ([Shotts 2013](http://linuxcommand.org/tlcl.php)).
 
In other words, people now take computers for granted. They're toys, for playing Angry Birds, 
communicating with friends and shopping. But back in the early days of the digital revolution
computers were more than that. They were going to change the world. And they did, just not
in the way that most people had envisioned: vast monopolies now control the majority of most 
people's computing life, pushing the DIY ethic that drove the digital revolution onto the back foot.
The stark reality of this situation, and ways to rejuvenate that exciting DIY ethic are
described in the same book in more optimistic terms:

> A few giant corporations have been imposing their
 control over most of the world's computers and deciding what you can and cannot do
 with them. Fortunately, people from all over the world are doing something about it. They
 are fighting to maintain control of their computers by writing their own software. They
 are building Linux ([Shotts 2013](http://linuxcommand.org/tlcl.php)).

If users of computers are not aware of this history, there is a danger that we sleepwalk into a
situation where all computing is controlled from above, where nobody has complete control 
over their digital life. This nightmare scenario is envoked by some of the statements surrounding the 
revelations by Edward Snowden about mass survailence by the National Security Agency (NSA),
making control over your computing life more important than ever. 

<iframe width="560" height="315" src="//www.youtube.com/embed/0hLjuVyIIrs?list=PL0u-OizqWvnc2V5dLnKRffhNL8YWTJZkZ" frameborder="0" allowfullscreen></iframe>

How can we do this? Well a good start is with open source software that allows you to do
almost anything you could want to, for free and usually more efficiently than on 
expensive proprietary software such as the various programs sold by Microsoft.

As with [hardware](http://robinlovelace.net/hardware), a critical stage in the effective use
of software is selecting the correct tool for the job. You *could* use a spreadsheet program to 
write a love letter, for example, but this may not get you very far. Best use a text editor like 
[LibreOffice Writer](https://www.libreoffice.org/features/writer/). The open source approach to 
software by its very nature revels in diversity and choice: the analogy to ecosystems
here is apt - biodiversity is associated with resilience ([Gunderson 2002](http://books.google.co.uk/books?id=35sKi-QXKGgC&pg=PA136&lpg=PA136&dq=resilience+odum&source=bl&ots=oyZSbO9v9G&sig=3OsbkUlySUFjm_ylJwTzOSLiiKk&hl=en&sa=X&ei=SWoDU9eON8GAhAfKjoDACg&ved=0CFcQ6AEwBQ#v=onepage&q=resilience%20odum&f=false)).
Open source tools thus make you think about what you want to achieve *before* starting a project.
This, in my experience, means that the additional time spent learning free software is generally outweighed 
by the time savings once you get started: there are less distractions.

So articles about software on this site will be *task-orientated*, miniature "how to" guides for solving 
specific problems, assuming no previous knowledge of computers. As a first stage I would recommend 
installing some form of [Linux](http://en.wikipedia.org/wiki/Linux) on your computer. The easiest way to 
do this is probably by installing [Ubuntu](http://www.ubuntu.com/) or politely asking a mate who is into 
that kind of thing to do it for you, and perhaps offering to buy them a pint of the effort!

## Articles about software

<ul class="posts">
{% for post in site.tags.software limit: 20 %}
  <div class="post_info">
    <li>
         <a href="{{ post.url }}">{{ post.title }}</a>
         <span>({{ post.date | date:"%Y-%m-%d" }})</span>
    </li>
    </div>
  {% endfor %}
</ul>
