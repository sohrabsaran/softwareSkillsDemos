All type of software projects are ultimately subsets of maintenance projects.
The solutions listed below are more motivational in nature than anything else, since the below stuff is more or less common sense.
Anyway, here goes:

# Challenges in maintenance projects and their solutions

## Competing approaches
- Time is critical. Which approach is closest to completion, and is the next step in that approach?
- List the pros and cons and then take a decision on which approach will be the best one.

## Don't remember or know the project status
- Tune the log messages to understand the current runtime behavior at a high level 
- Allow log messages to be toggled on and off
- Log the system status to a status file

## Don't remember the project goal
- Investigate it and document it

## Can't remember what a particular piece of code does
- Do refactoring
- Document

## Code getting too complex
- break it into multiple files and smaller functions. 
- Increase the documentation.
- Work under version control, and delete code that is unwanted

## Getting old and forgetful
- put things in clear, globally accessible places
- take proper backups.

## Task seems to be taking too long
- measure progress and work remaining.
