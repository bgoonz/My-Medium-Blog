Basic Git Workflow
==================

A quick intermediate level summary (Exp …approx. 1 year)

------------------------------------------------------------------------

### Basic Git Workflow

#### A quick intermediate level summary (Exp …approx. 1 year)

### help

To give you quick access to an extremely detailed guide of each command. Or to just give you a quick reminder of some semantics.

    # Quickly check available commands
    $ git help

    # Check all available commands
    $ git help -a

    # Command specific help - user manual
    # git help <command_here>
    $ git help add
    $ git help commit
    $ git help init
    # or git <command_here> --help
    $ git add --help
    $ git commit --help
    $ git init --help

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bnYz9m0pxbKDV14w.gif" class="graf-image" /></figure><a href="https://github.com/bgoonz/github-reference-repo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/github-reference-repo"><strong>GitHub - bgoonz/github-reference-repo: just some stuff to help keep me sane</strong><br />
<em>git init # initiates git in the current directory git clone # creates a git repo from given address (get the address…</em>github.com</a><a href="https://github.com/bgoonz/github-reference-repo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Pulling

Although a `git fetch` is very useful in order to get the remote information of a branch, we can also perform a `git pull`. A `git pull` is actually two commands in one: a `git fetch`, and a `git merge`. When we're pulling changes from the origin, we're first fetching all the data like we did with a `git fetch`, after which the latest changes are automatically merged into the local branch.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*mjd8AFjM_0UJM_TP.gif" class="graf-image" /></figure>### add & commit

You can propose changes (add it to the Index) using  
`git add <filename>`  
`git add *`  
This is the first step in the basic git workflow. To actually commit these changes use  
`git commit -m "Commit message"`  
Now the file is committed to the HEAD, but not in your remote repository yet.

### add

To add files to the staging area/index. If you do not `git add` new files to the staging area/index, they will not be included in commits!

    # add a file in your current working directory
    $ git add HelloWorld.java

    # add a file in a nested dir
    $ git add /path/to/file/HelloWorld.c

    # Regular Expression support!
    $ git add ./*.java

    # You can also add everything in your working directory to the staging area.
    $ git add -A

### pushing changes

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CW75Ag1700z1x5Ug.gif" class="graf-image" /></figure>Your changes are now in the HEAD of your local working copy. To send those changes to your remote repository, execute  
`git push origin master`  
Change *master* to whatever branch you want to push your changes to.

If you have not cloned an existing repository and want to connect your repository to a remote server, you need to add it with  
`git remote add origin <server>`  
Now you are able to push your changes to the selected remote server

### branching

Branches are used to develop features isolated from each other. The *master* branch is the “default” branch when you create a repository. Use other branches for development and merge them back to the master branch upon completion.

create a new branch named “feature\_x” and switch to it using  
`git checkout -b feature_x`  
switch back to master  
`git checkout master`  
and delete the branch again  
`git branch -d feature_x`  
a branch is *not available to others* unless you push the branch to your remote repository  
`git push origin <branch>`

### branch

Manage your branches. You can view, edit, create, delete branches using this command.

    # list existing branches & remotes
    $ git branch -a

    # create a new branch
    $ git branch myNewBranch

    # delete a branch
    $ git branch -d myBranch

    # rename a branch
    # git branch -m <oldname> <newname>
    $ git branch -m myBranchName myNewBranchName

    # edit a branch's description
    $ git branch myBranchName --edit-description

### update & merge

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WRiMoR4h8iz1NvC-.gif" class="graf-image" /></figure>to update your local repository to the newest commit, execute  
`git pull`  
in your working directory to *fetch* and *merge* remote changes.  
to merge another branch into your active branch (e.g. master), use  
`git merge <branch>`  
in both cases git tries to auto-merge changes. Unfortunately, this is not always possible and results in *conflicts*. You are responsible to merge those *conflicts* manually by editing the files shown by git. After changing, you need to mark them as merged with  
`git add <filename>`  
before merging changes, you can also preview them by using  
`git diff <source_branch> <target_branch>`

### tagging

it’s recommended to create tags for software releases. this is a known concept, which also exists in SVN. You can create a new tag named *1.0.0* by executing  
`git tag 1.0.0 1b2e1d63ff`  
the *1b2e1d63ff* stands for the first 10 characters of the commit id you want to reference with your tag. You can get the commit id by looking at the...

### log

in its simplest form, you can study repository history using.. `git log`  
You can add a lot of parameters to make the log look like what you want. To see only the commits of a certain author:  
`git log --author=bob`  
To see a very compressed log where each commit is one line:  
`git log --pretty=oneline`  
Or maybe you want to see an ASCII art tree of all the branches, decorated with the names of tags and branches:  
`git log --graph --oneline --decorate --all`  
See only which files have changed:  
`git log --name-status`  
These are just a few of the possible parameters you can use. For more, see `git log --help`

### replace local changes

In case you did something wrong, which for sure never happens ;), you can replace local changes using the command  
`git checkout -- <filename>`  
this replaces the changes in your working tree with the last content in HEAD. Changes already added to the index, as well as new files, will be kept.

If you instead want to drop all your local changes and commits, fetch the latest history from the server and point your local master branch at it like this  
`git fetch origin`  
`git reset --hard origin/master`

### Fetching

If we have a remote Git branch, for example a branch on Github, it can happen that the remote branch has commits that the current branch doesn’t have! Maybe another branch got merged, your colleague pushed a quick fix, and so on.

We can get these changes locally, by performing a `git fetch` on the remote branch! It doesn't affect your local branch in any way: a `fetch` simply downloads new data.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ODyOguZk5GYiLFUQ.gif" class="graf-image" /></figure>### checkout

Updates all files in the working tree to match the version in the index, or specified tree.

    # Checkout a repo - defaults to master branch
    $ git checkout

    # Checkout a specified branch
    $ git checkout branchName

    # Create a new branch & switch to it
    # equivalent to "git branch <name>; git checkout <name>"

    $ git checkout -b newBranch

### clone

Clones, or copies, an existing repository into a new directory. It also adds remote-tracking branches for each branch in the cloned repo, which allows you to push to a remote branch.

    # Clone learnxinyminutes-docs
    $ git clone https://github.com/adambard/learnxinyminutes-docs.git

    # shallow clone - faster cloning that pulls only latest snapshot
    $ git clone --depth 1 https://github.com/adambard/learnxinyminutes-docs.git

    # clone only a specific branch
    $ git clone -b master-cn https://github.com/adambard/learnxinyminutes-docs.git --single-branch

### commit

Stores the current contents of the index in a new “commit.” This commit contains the changes made and a message created by the user.

    # commit with a message
    $ git commit -m "Added multiplyNumbers() function to HelloWorld.c"

    # signed commit with a message (user.signingkey must have been set
    # with your GPG key e.g. git config --global user.signingkey 5173AAD5)
    $ git commit -S -m "signed commit message"

    # automatically stage modified or deleted files, except new files, and then commit
    $ git commit -a -m "Modified foo.php and removed bar.php"

    # change last commit (this deletes previous commit with a fresh commit)
    $ git commit --amend -m "Correct message"

### CREDITS:

<a href="https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1#pull" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1#pull"><strong>🌳🚀 CS Visualized: Useful Git Commands</strong><br />
<em>Although Git is a very powerful tool, I think most people would agree when I say it can also be... a total nightmare 😐…</em>dev.to</a><a href="https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1#pull" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### More Resources:

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [September 22, 2021](https://medium.com/p/4c5a06ac3507).

<a href="https://medium.com/@bryanguner/basic-git-workflow-4c5a06ac3507" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on October 14, 2021.
