What is “the Shell”?
====================

The magic conch is an almighty authority in SpongeBob. This godly item makes items like the Ultimate Nullifier and the Heart Of The…

------------------------------------------------------------------------

### **What is “the Shell”?**

#### **The magic conch is an almighty authority in SpongeBob. This godly item makes items like the Ultimate Nullifier and the Heart Of The Universe look like playthings for babies.**

  

  

**The shell is a program that takes commands from the keyboard and gives them to the operating system to perform. In the old days, it was the only user interface available on a Unix-like system such as Linux. Nowadays, we have *graphical user interfaces (GUIs)* in addition to *command line interfaces (CLIs)* such as the shell.**

**On most Linux systems a program called** <a href="http://linuxcommand.org/lc3_man_pages/bash1.html" class="markup--anchor markup--p-anchor"><strong>bash</strong></a> **(which stands for Bourne Again SHell) an enhanced version of the original Unix shell program, sh, written by Steve Bourne) acts as the shell program. Besides bash, there are other shell programs available for Linux systems. These include: ksh, tcsh and zsh.**

**General Commands Manual**

**What’s a “Terminal?”**

It’s a program called a *terminal emulator*. This is a program that opens a window and lets you interact with the shell. There are a bunch of different terminal emulators we can use. Some Linux distributions install several. These might include **gnome-terminal**, **konsole**, **xterm**, **rxvt**, **kvt**, **nxterm**, and **eterm**.

**Starting a Terminal**

Window managers usually have a way to launch a terminal from the menu. Look through the list of programs to see if anything looks like a terminal emulator. While there are a number of different terminal emulators, they all do the same thing. They give us access to a shell session. You will probably develop a preference for one, based on the different bells and whistles it provides.

**Testing the Keyboard**

OK, let’s try some typing. Bring up a terminal window. The first thing we should see is a *shell prompt* that contains our user name and the name of the machine followed by a dollar sign. Something like this:

\[me@bgoonz me\]$

Excellent! Now type some nonsense characters and press the enter key.

\[me@bgoonz me\]$ **kdkjflajfks**

If all went well, we should have gotten an error message complaining that it cannot understand the command:

\[me@bgoonz me\]$ **kdkjflajfks** bash: kdkjflajfks: command not found

Wonderful! Now press the up-arrow key. Watch how our previous command “kdkjflajfks” returns. Yes, we have *command history*. Press the down-arrow and we get the blank line again.

Recall the “kdkjflajfks” command using the up-arrow key if needed. Now, try the left and right-arrow keys. We can position the text cursor anywhere in the command line. This allows us to easily correct mistakes.

**You’re not operating as root, are you?**

If the last character of your shell prompt is \# rather than $, you are operating as the *superuser*. This means that you have administrative privileges. This can be dangerous, since you are able to delete or overwrite any file on the system. Unless you absolutely need administrative privileges, do not operate as the superuser.

**Using the Mouse**

Even though the shell is a command line interface, the mouse is still handy.

Besides using the mouse to scroll the contents of the terminal window, we can can use it to copy text. Drag the mouse over some text (for example, “kdkjflajfks” right here on the browser window) while holding down the left button. The text should highlight. Release the left button and move the mouse pointer to the terminal window and press the middle mouse button (alternately, press both the left and right buttons at the same time when working on a touch pad). The text we highlighted in the browser window should be copied into the command line.

introduce our first three commands: <a href="http://linuxcommand.org/lc3_man_pages/pwdh.html" class="markup--anchor markup--p-anchor"><strong>pwd</strong></a> (print working directory), <a href="http://linuxcommand.org/lc3_man_pages/cdh.html" class="markup--anchor markup--p-anchor"><strong>cd</strong></a> (change directory), and <a href="http://linuxcommand.org/lc3_man_pages/ls1.html" class="markup--anchor markup--p-anchor"><strong>ls</strong></a> (list files and directories).

Those new to the command line will need to pay close attention to this lesson since the concepts will take some getting used to.

**File System Organization**

Like Windows, the files on a Linux system are arranged in what is called a *hierarchical directory structure*. This means that they are organized in a tree-like pattern of *directories* (called folders in other systems), which may contain files and *subdirectories*. The first directory in the file system is called the *root directory*. The root directory contains files and subdirectories, which contain more files and subdirectories and so on and so on.

Most graphical environments include a file manager program used to view and manipulate the contents of the file system. Often we will see the file system represented like this:

One important difference between Windows and Unix-like operating systems such as Linux is that Linux does not employ the concept of drive letters. While Windows drive letters split the file system into a series of different trees (one for each device), Linux always has a single tree. Different storage devices may be different branches of the tree, but there is always just a single tree.

**pwd**

Since the command line interface cannot provide graphic pictures of the file system structure, we must have a different way of representing it. To do this, think of the file system tree as a maze, and that we are standing in it. At any given moment, we are located in a single directory. Inside that directory, we can see its files and the pathway to its *parent directory* and the pathways to the subdirectories of the directory in which we are standing.

The directory we are standing in is called the *working directory*. To see the name of the working directory, we use the **pwd** command.

\[me@bgoonz me\]$ **pwd** /home/me

When we first log on to our Linux system, the working directory is set to our *home directory*. This is where we put our files. On most systems, the home directory will be called /home/user\_name, but it can be anything according to the whims of the system administrator.

To list the files in the working directory, we use the **ls** command.

\[me@bgoonz me\]$ **ls** Desktop Downloads foo.txt Pictures Templates Documents examples.desktop Music Public Videos

We will come back to **ls** in the next lesson. There are a lot of fun things you can do with it, but we have to talk about pathnames and directories a bit first.

**cd**

To change the working directory (where we are standing in the maze) we use the **cd** command. To do this, we type **cd** followed by the *pathname* of the desired working directory. A pathname is the route we take along the branches of the tree to get to the directory we want. Pathnames can be specified two different ways; *absolute pathnames* or *relative pathnames*. Let’s look with absolute pathnames first.

An absolute pathname begins with the root directory and follows the tree branch by branch until the path to the desired directory or file is completed. For example, there is a directory on your system in which most programs are installed. The pathname of the directory is /usr/bin. This means from the root directory (represented by the leading slash in the pathname) there is a directory called “usr” which contains a directory called “bin”.

Let’s try this out:

me@bgoonz me\]$ **cd /usr/bin** me@bgoonz bin\]$ **pwd** /usr/bin me@bgoonz bin\]$ **ls** ‘\[‘ mshortname 2to3–2.7 mshowfat 411toppm mtools a2ps mtoolstest a2ps-lpr-wrapper mtr aa-enabled mtrace aa-exec mtr-packet aclocal mtvtoppm aclocal-1.15 mtype aconnect mutter acpi\_listen mxtar add-apt-repository mzip addpart namei and many more…

Now we can see that we have changed the current working directory to /usr/bin and that it is full of files. Notice how the shell prompt has changed? As a convenience, it is usually set up to display the name of the working directory.

Where an absolute pathname starts from the root directory and leads to its destination, a relative pathname starts from the working directory. To do this, it uses a couple of special notations to represent relative positions in the file system tree. These special notations are “.” (dot) and “..” (dot dot).

The “.” notation refers to the working directory itself and the “..” notation refers to the working directory’s parent directory. Here is how it works. Let’s change the working directory to /usr/bin again:

me@bgoonz me\]$ **cd /usr/bin** me@bgoonz bin\]$ **pwd** /usr/bin

O.K., now let’s say that we wanted to change the working directory to the parent of /usr/bin which is /usr. We could do that two different ways. First, with an absolute pathname:

me@bgoonz bin\]$ **cd /usr** me@bgoonz usr\]$ **pwd** /usr

Or, with a relative pathname:

me@bgoonz bin\]$ **cd ..** me@bgoonz usr\]$ **pwd** /usr

Two different methods with identical results. Which one should we use? The one that requires the least typing!

Likewise, we can change the working directory from /usr to /usr/bin in two different ways. First using an absolute pathname:

me@bgoonz usr\]$ **cd /usr/bin** me@bgoonz bin\]$ **pwd** /usr/bin

Or, with a relative pathname:

me@bgoonz usr\]$ **cd ./bin** me@bgoonz bin\]$ **pwd** /usr/bin

Now, there is something important that we must point out here. In most cases, we can omit the “./”. It is implied. Typing:

me@bgoonz usr\]$ **cd bin**

would do the same thing. In general, if we do not specify a pathname to something, the working directory will be assumed. There is one important exception to this, but we won’t get to that for a while.

**A Few Shortcuts**

If we type **cd** followed by nothing, **cd** will change the working directory to our home directory.

A related shortcut is to type **cd ~*user\_name***. In this case, **cd** will change the working directory to the home directory of the specified user.

Typing **cd **— changes the working directory to the previous one.

**Important facts about file names**

1. File names that begin with a period character are hidden. This only means that **ls** will not list them unless we say **ls -a**. When your account was created, several hidden files were placed in your home directory to configure things for your account. Later on we will take a closer look at some of these files to see how you can customize our *environment*. In addition, some applications will place their configuration and settings files in your home directory as hidden files.

2. File names in Linux, like Unix, are case sensitive. The file names “File1” and “file1” refer to different files.

3. Linux has no concept of a “file extension” like Windows systems. You may name files any way you like. However, while Linux itself does not care about file extensions, many application programs do.

4. Though Linux supports long file names which may contain embedded spaces and punctuation characters, limit the punctuation characters to period, dash, and underscore. **Most importantly, do not embed spaces in file names.** If you want to represent spaces between words in a file name, use underscore characters. You will thank yourself later.

**Looking Around**

Now that we know how to move from working directory to working directory, we’re going to take a tour of our Linux system and, along the way, learn some things about what makes it tick. But before we begin, we have to learn about some tools that will come in handy during our journey. These are:

-   <span id="c3f1"><a href="http://linuxcommand.org/lc3_man_pages/ls1.html" class="markup--anchor markup--li-anchor"><strong>ls</strong></a> (list files and directories)</span>
-   <span id="6a5c"><a href="http://linuxcommand.org/lc3_man_pages/less1.html" class="markup--anchor markup--li-anchor"><strong>less</strong></a> (view text files)</span>
-   <span id="d334"><a href="http://linuxcommand.org/lc3_man_pages/file1.html" class="markup--anchor markup--li-anchor"><strong>file</strong></a> (classify a file’s contents)</span>

**ls**

The **ls** command is used to list the contents of a directory. It is probably the most commonly used Linux command. It can be used in a number of different ways. Here are some examples:

These examples also point out an important concept about commands. Most commands operate like this:

*command -options arguments*

where *command* is the name of the command, *-options* is one or more adjustments to the command’s behavior, and *arguments* is one or more “things” upon which the command operates.

In the case of **ls**, we see that **ls** is the name of the command, and that it can have one or more options, such as **-a** and **-l**, and it can operate on one or more files or directories.

**A Closer Look at Long Format**

If we use the **-l** option with **ls**, you will get a file listing that contains a wealth of information about the files being listed. Here’s an example:

**-rw — — — — 1 me me 576 Apr 17 2019 weather.txt  
 drwxr-xr-x 6 me me 1024 Oct 9 2019 web\_page  
 -rw-rw-r — 1 me me 276480 Feb 11 20:41 web\_site.tar  
 -rw — — — — 1 me me 5743 Dec 16 2018 xmas\_file.txt  
   
 — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -  
 | | | | | |  
 | | | | | File Name  
 | | | | |  
 | | | | + — — Modification Time  
 | | | |  
 | | | + — — — — — — — Size (in bytes)  
 | | |  
 | | + — — — — — — — — — — — — Group  
 | |  
 | + — — — — — — — — — — — — — — — — Owner  
 |  
 + — — — — — — — — — — — — — — — — — — — — — — — File Permissions**

**File Name**The name of the file or directory.**Modification Time**The last time the file was modified. If the last modification occurred more than six months in the past, the date and year are displayed. Otherwise, the time of day is shown.**Size**The size of the file in bytes.**Group**The name of the group that has file permissions in addition to the file’s owner.**Owner**The name of the user who owns the file.**File Permissions**A representation of the file’s access permissions. The first character is the type of file. A “-” indicates a regular (ordinary) file. A “d” indicates a directory. The second set of three characters represent the read, write, and execution rights of the file’s owner. The next three represent the rights of the file’s group, and the final three represent the rights granted to everybody else. We’ll discuss this in more detail in a later lesson.

**less**

**less** is a program that lets us view text files. This is very handy since many of the files used to control and configure Linux are human readable.

**What is “text”?**

There are many ways to represent information on a computer. All methods involve defining a relationship between the information and some numbers that will be used to represent it. Computers, after all, only understand numbers and all data is converted to numeric representation.

Some of these representation systems are very complex (such as compressed multimedia files), while others are rather simple. One of the earliest and simplest is called *ASCII text*. <a href="http://linuxcommand.org/lc3_man_pages/ascii7.html" class="markup--anchor markup--p-anchor">ASCII</a> (pronounced “As-Key”) is short for American Standard Code for Information Interchange. This is a simple encoding scheme that was first used on Teletype machines to map keyboard characters to numbers.

Text is a simple one-to-one mapping of characters to numbers. It is very compact. Fifty characters of text translates to fifty bytes of data. Throughout a Linux system, many files are stored in text format and there are many Linux tools that work with text files. Even Windows systems recognize the importance of this format. The well-known NOTEPAD.EXE program is an editor for plain ASCII text files.

The **less** program is invoked by simply typing:

less *text\_file*

This will display the file.

**Controlling less**

Once started, **less** will display the text file one page at a time. We can use the Page Up and Page Down keys to move through the text file. To exit **less**, we type “q”. Here are some commands that **less** will accept:

**file**

As we wander around our Linux system, it is helpful to determine what kind of data a file contains before we try to view it. This is where the **file** command comes in. **file** will examine a file and tell us what kind of file it is.

To use the **file** program, we just type:

file *name\_of\_file*

The **file** program can recognize most types of files, such as:

While it may seem that most files cannot be viewed as text, a surprising number can be. This is especially true of the important configuration files. During our adventure we will see that many features of the operating system are controlled by text configuration files and shell scripts. In Linux, there are no secrets!

For each of the directories listed below, do the following:

-   <span id="b096">**cd** into each directory.</span>
-   <span id="9adc">Use **ls** to list the contents of the directory.</span>
-   <span id="d400">If there is an interesting file, use the **file** command to determine its contents.</span>
-   <span id="f869">For text files, use **less** to view them.</span>

**A weird kind of file…**

During your tour, you probably noticed a strange kind of directory entry, particularly in the **/lib** directory. When listed with **ls -l**, you might have seen something like this:

lrwxrwxrwx 25 Jul 3 16:42 System.map -&gt; /boot/System.map-4.0.36–3  
 -rw-r — r — 105911 Oct 13 2018 System.map-4.0.36–0.7  
 -rw-r — r — 105935 Dec 29 2018 System.map-4.0.36–3  
 -rw-r — r — 181986 Dec 11 2019 initrd-4.0.36–0.7.img  
 -rw-r — r — 182001 Dec 11 2019 initrd-4.0.36.img  
 lrwxrwxrwx 26 Jul 3 16:42 module-info -&gt; /boot/module-info-4.0.36–3  
 -rw-r — r — 11773 Oct 13 2018 module-info-4.0.36–0.7  
 -rw-r — r — 11773 Dec 29 2018 module-info-4.0.36–3  
 lrwxrwxrwx 16 Dec 11 2019 vmlinuz -&gt; vmlinuz-4.0.36–3  
 -rw-r — r — 454325 Oct 13 2018 vmlinuz-4.0.36–0.7  
 -rw-r — r — 454434 Dec 29 2018 vmlinuz-4.0.36–3

Notice the files, System.map, module-info and vmlinuz. See the strange notation after the file names?

Files such as this are called *symbolic links*. Symbolic links are a special type of file that points to another file. With symbolic links, it is possible for a single file to have multiple names. Here’s how it works: Whenever the system is given a file name that is a symbolic link, it transparently maps it to the file it is pointing to.

Just what is this good for? This is a very handy feature. Let’s consider the directory listing above (which is the /boot directory of an old system). This system has had multiple versions of the Linux kernel installed. We can see this from the files vmlinuz-4.0.36–0.7 and vmlinuz-4.0.36–3. These file names suggest that both version 4.0.36–0.7 and 4.0.36–3 are installed. Because the file names contain the version it is easy to see the differences in the directory listing. However, this would be confusing to programs that rely on a fixed name for the kernel file. These programs might expect the kernel to simply be called “vmlinuz”. Here is where the beauty of the symbolic link comes in. By creating a symbolic link called vmlinuz that points to vmlinuz-4.0.36–3, we have solved the problem.

To create symbolic links, we use the <a href="http://linuxcommand.org/lc3_man_pages/ln1.html" class="markup--anchor markup--p-anchor"><strong>ln</strong></a> command.

**Manipulating Files**

This lesson will introduce the following commands:

-   <span id="423a"><a href="http://linuxcommand.org/lc3_man_pages/cp1.html" class="markup--anchor markup--li-anchor"><strong>cp</strong></a> — copy files and directories</span>
-   <span id="ba49"><a href="http://linuxcommand.org/lc3_man_pages/mv1.html" class="markup--anchor markup--li-anchor"><strong>mv</strong></a> — move or rename files and directories</span>
-   <span id="0684"><a href="http://linuxcommand.org/lc3_man_pages/rm1.html" class="markup--anchor markup--li-anchor"><strong>rm</strong></a> — remove files and directories</span>
-   <span id="2cdc"><a href="http://linuxcommand.org/lc3_man_pages/mkdir1.html" class="markup--anchor markup--li-anchor"><strong>mkdir</strong></a> — create directories</span>

These four commands are among the most frequently used Linux commands. They are the basic commands for manipulating both files and directories.

Now, to be frank, some of the tasks performed by these commands are more easily done with a graphical file manager. With a file manager, you can drag and drop a file from one directory to another, cut and paste files, delete files, etc. So why use these old command line programs?

The answer is power and flexibility. While it is easy to perform simple file manipulations with a graphical file manager, complicated tasks can be easier with the command line programs. For example, how would you copy all the HTML files from one directory to another, but only copy files that did not exist in the destination directory or were newer than the versions in the destination directory? Pretty hard with with a file manager. Pretty easy with the command line:

\[me@bgoonz me\]$ **cp -u \*.html destination**

**Wildcards**

Before we begin with our commands, we’ll first look at a shell feature that makes these commands so powerful. Since the shell uses filenames so much, it provides special characters to help you rapidly specify groups of filenames. These special characters are called *wildcards*. Wildcards allow you to select filenames based on patterns of characters. The table below lists the wildcards and what they select:

We can use wildcards with any command that accepts filename arguments.

**cp**

The **cp** program copies files and directories. In its simplest form, it copies a single file:

\[me@bgoonz me\]$ **cp *file1 file2***

It can also be used to copy multiple files (and/or directories) to a different directory:

\[me@bgoonz me\]$ **cp *file… directory***

**A note on notation:** … signifies that an item can be repeated one or more times.

Other useful examples of **cp** and its options include:

**mv**

The **mv** command moves or renames files and directories depending on how it is used. It will either move one or more files to a different directory, or it will rename a file or directory. To rename a file, it is used like this:

\[me@bgoonz me\]$ **mv *filename1 filename2***

To move files (and/or directories) to a different directory:

\[me@bgoonz me\]$ **mv *file… directory***

Examples of **mv** and its options include:

Be careful with rm!

Linux does not have an undelete command. Once you delete something with **rm**, it’s gone. You can inflict terrific damage on your system with **rm** if you are not careful, particularly with wildcards.

***Before you use* rm *with wildcards, try this helpful trick:*** construct your command using **ls** instead. By doing this, you can see the effect of your wildcards before you delete files. After you have tested your command with **ls**, recall the command with the up-arrow key and then substitute **rm** for **ls** in the command.

**mkdir**

The **mkdir** command is used to create directories. To use it, you simply type:

\[me@bgoonz me\]$ **mkdir *directory…***

**Using Commands with Wildcards**

Since the commands we have covered here accept multiple file and directories names as arguments, you can use wildcards to specify them. Here are a few examples:

**Working with Commands**

Up until now, we have seen a number of commands and their mysterious options and arguments. In this lesson, we will try to remove some of that mystery. We will introduce the following commands.

-   <span id="289a"><a href="http://linuxcommand.org/lc3_man_pages/typeh.html" class="markup--anchor markup--li-anchor"><strong>type</strong></a> — Display information about command type</span>
-   <span id="bbc4"><a href="http://linuxcommand.org/lc3_man_pages/which1.html" class="markup--anchor markup--li-anchor"><strong>which</strong></a> — Locate a command</span>
-   <span id="b142"><a href="http://linuxcommand.org/lc3_man_pages/helph.html" class="markup--anchor markup--li-anchor"><strong>help</strong></a> — Display reference page for shell builtin</span>
-   <span id="19b8"><a href="http://linuxcommand.org/lc3_man_pages/man1.html" class="markup--anchor markup--li-anchor"><strong>man</strong></a> — Display an on-line command reference</span>

**What are “Commands?”**

Commands can be one of 4 different kinds:

1. **An executable program** like all those files we saw in /usr/bin. Within this category, programs can be *compiled binaries* such as programs written in C and C++, or programs written in *scripting languages* such as the shell, Perl, Python, Ruby, etc.

2. **A command built into the shell itself.** bash provides a number of commands internally called *shell builtins*. The **cd** command, for example, is a shell builtin.

3. **A shell function.** These are miniature shell scripts incorporated into the *environment*. We will cover configuring the environment and writing shell functions in later lessons, but for now, just be aware that they exist.

4. **An alias.** Commands that we can define ourselves, built from other commands. This will be covered in a later lesson.

**Identifying Commands**

It is often useful to know exactly which of the four kinds of commands is being used and Linux provides a couple of ways to find out.

**type**

The **type** command is a shell builtin that displays the kind of command the shell will execute, given a particular command name. It works like this:

type *command*

where “command” is the name of the command we want to examine. Here are some examples:

\[me@bgoonz me\]$ **type type** type is a shell builtin \[me@bgoonz me\]$ **type ls** s is aliased to \`ls — color=auto’ \[me@bgoonz me\]$ **type cp** cp is /bin/cp

Here we see the results for three different commands. Notice that the one for **ls** and how the ls command is actually an alias for the **ls** command with the “ — color=auto” option added. Now we know why the output from **ls** is displayed in color!

**which**

Sometimes there is more than one version of an executable program installed on a system. While this is not very common on desktop systems, it’s not unusual on large servers. To determine the exact location of a given executable, the **which** command is used:

\[me@bgoonz me\]$ **which ls** /bin/ls

**which** only works for executable programs, not builtins nor aliases that are substitutes for actual executable programs.

**Getting Command Documentation**

With this knowledge of what a command is, we can now search for the documentation available for each kind of command.

**help**

**bash** has a built-in help facility available for each of the shell builtins. To use it, type “help” followed by the name of the shell builtin. Optionally, we can add the -m option to change the format of the output. For example:

\[me@bgoonz me\]$ **help -m cd** NAME cd — Change the shell working directory. SYNOPSIS cd \[-L|-P\] \[dir\] DESCRIPTION Change the shell working directory. Change the current directory to DIR. The default DIR is the value of the HOME shell variable. The variable CDPATH defines the search path for the directory containing DIR. Alternative directory names in CDPATH are separated by a colon (:). A null directory name is the same as the current directory. If DIR begins with a slash (/), then CDPATH is not used. If the directory is not found, and the shell option \`cdable\_vars’ is set, the word is assumed to be a variable name. If that variable has a value, its value is used for DIR. Options: -L force symbolic links to be followed -P use the physical directory structure without following symbolic links The default is to follow symbolic links, as if \`-L’ were specified. Exit Status: Returns 0 if the directory is changed; non-zero otherwise. SEE ALSO bash(1) IMPLEMENTATION GNU bash, version 4.1.5(1)-release (i486-pc-linux-gnu) Copyright © 2009 Free Software Foundation, Inc.

**A note on notation:** When square brackets appear in the description of a command’s syntax, they indicate optional items. A vertical bar character indicates mutually exclusive items. In the case of the **cd** command above:

cd \[-L|-P\] \[dir\]

This notation says that the command **cd** may be followed optionally by either a “-L” or a “-P” and further, optionally followed by the argument “dir”.

**— help**

Many executable programs support a “ — help” option that displays a description of the command’s supported syntax and options. For example:

\[me@bgoonz me\]$ **mkdir — help** Usage: mkdir \[OPTION\] DIRECTORY… Create the DIRECTORY(ies), if they do not already exist. Mandatory arguments to long options are mandatory for short options too. -Z, — context=CONTEXT (SELinux) set security context to CONTEXT -m, — mode=MODE set file mode (as in chmod), not a=rwx — umask -p, — parents no error if existing, make parent directories as needed -v, — verbose print a message for each created directory — help display this help and exit — version output version information and exit

Some programs don’t support the “ — help” option, but try it anyway. Often it results in an error message that will reveal similar usage information.

**man**

Most executable programs intended for command line use provide a formal piece of documentation called a *manual* or *man page*. A special paging program called **man** is used to view them. It is used like this:

man *program*

where “program” is the name of the command to view. Man pages vary somewhat in format but generally contain a title, a synopsis of the command’s syntax, a description of the command’s purpose, and a listing and description of each of the command’s options. Man pages, however, do not usually include examples, and are intended as a reference, not a tutorial. Let’s try viewing the man page for the **ls** command:

\[me@bgoonz me\]$ **man ls**

On most Linux systems, **man** uses **less** to display the manual page, so all of the familiar **less** commands work while displaying the page.

**README and Other Documentation Files**

Many software packages installed on your system have documentation files residing in the /usr/share/doc directory. Most of these are stored in plain text format and can be viewed with **less**. Some of the files are in HTML format and can be viewed with a web browser. We may encounter some files ending with a “.gz” extension. This indicates that they have been compressed with the **gzip** compression program. The gzip package includes a special version of **less** called **zless** that will display the contents of gzip-compressed text files.

**I/O Redirection**

In this lesson, we will explore a powerful feature used by command line programs called *input/output redirection*. As we have seen, many commands such as **ls** print their output on the display. This does not have to be the case, however. By using some special notations we can *redirect* the output of many commands to files, devices, and even to the input of other commands.

**Standard Output**

Most command line programs that display their results do so by sending their results to a facility called *standard output*. By default, standard output directs its contents to the display. To redirect standard output to a file, the “&gt;” character is used like this:

\[me@bgoonz me\]$ **ls &gt; file\_list.txt**

In this example, the **ls** command is executed and the results are written in a file named file\_list.txt. Since the output of **ls** was redirected to the file, no results appear on the display.

Each time the command above is repeated, file\_list.txt is overwritten from the beginning with the output of the command **ls**. To have the new results *appended* to the file instead, we use “&gt;&gt;” like this:

\[me@bgoonz me\]$**ls &gt;&gt; file\_list.txt**

When the results are appended, the new results are added to the end of the file, thus making the file longer each time the command is repeated. If the file does not exist when we attempt to append the redirected output, the file will be created.

**Standard Input**

Many commands can accept input from a facility called *standard input*. By default, standard input gets its contents from the keyboard, but like standard output, it can be redirected. To redirect standard input from a file instead of the keyboard, the “&lt;” character is used like this:

\[me@bgoonz me\]$ **sort &lt; file\_list.txt**

In the example above, we used the <a href="http://linuxcommand.org/lc3_man_pages/sort1.html" class="markup--anchor markup--p-anchor"><strong>sort</strong></a> command to process the contents of file\_list.txt. The results are output on the display since the standard output was not redirected. We could redirect standard output to another file like this:

\[me@bgoonz me\]$ **sort &lt; file\_list.txt &gt; sorted\_file\_list.txt**

As we can see, a command can have both its input and output redirected. Be aware that the order of the redirection does not matter. The only requirement is that the redirection operators (the “&lt;” and “&gt;”) must appear after the other options and arguments in the command.

**Pipelines**

The most useful and powerful thing we can do with I/O redirection is to connect multiple commands together to form what are called *pipelines*. With pipelines, the standard output of one command is fed into the standard input of another. Here is a very useful example:

\[me@bgoonz me\]$ **ls -l | less**

In this example, the output of the **ls** command is fed into **less**. By using this **“| less”** trick, we can make any command have scrolling output.

By connecting commands together, we can accomplish amazing feats. Here are some examples to try:

**Performing tasks with pipelines**

1. **Printing from the command line.** Linux provides a program called <a href="http://linuxcommand.org/lc3_man_pages/lpr1.html" class="markup--anchor markup--p-anchor"><strong>lpr</strong></a> that accepts standard input and sends it to the printer. It is often used with pipes and filters. Here are a couple of examples:

cat poorly\_formatted\_report.txt | fmt | pr | lpr cat unsorted\_list\_with\_dupes.txt | sort | uniq | pr | lpr

1. In the first example, we use **cat** to read the file and output it to standard output, which is piped into the standard input of **fmt. fmt** formats the text into neat paragraphs and outputs it to standard output, which is piped into the standard input of **pr. pr** splits the text neatly into pages and outputs it to standard output, which is piped into the standard input of **lpr. lpr** takes its standard input and sends it to the printer.

2. The second example starts with an unsorted list of data with duplicate entries. First, **cat** sends the list into **sort** which sorts it and feeds it into **uniq** which removes any duplicates. Next **pr** and **lpr** are used to paginate and print the list.

3. **Viewing the contents of tar files** Often you will see software distributed as a *gzipped tar file*. This is a traditional Unix style tape archive file (created with <a href="http://linuxcommand.org/lc3_man_pages/tar1.html" class="markup--anchor markup--p-anchor"><strong>tar</strong></a>) that has been compressed with <a href="http://linuxcommand.org/lc3_man_pages/gzip1.html" class="markup--anchor markup--p-anchor"><strong>gzip</strong></a>. You can recognize these files by their traditional file extensions, “.tar.gz” or “.tgz”. You can use the following command to view the directory of such a file on a Linux system:

tar tzvf name\_of\_file.tar.gz | less

Each time we type a command line and press the enter key, bash performs several processes upon the text before it carries out our command. We have seen a couple of cases of how a simple character sequence, for example “\*”, can have a lot of meaning to the shell. The process that makes this happen is called *expansion*. With expansion, we type something and it is expanded into something else before the shell acts upon it. To demonstrate what we mean by this, let’s take a look at the <a href="http://linuxcommand.org/lc3_man_pages/echoh.html" class="markup--anchor markup--p-anchor"><strong>echo</strong></a> command. **echo** is a shell builtin that performs a very simple task. It prints out its text arguments on standard output:

\[me@bgoonz me\]$ **echo this is a test** this is a test

That’s pretty straightforward. Any argument passed to **echo** gets displayed. Let’s try another example:

\[me@bgoonz me\]$ **echo \*** Desktop Documents ls-output.txt Music Pictures Public Templates Videos

So what just happened? Why didn’t **echo** print “\*”? As we recall from our work with wildcards, the “\*” character means match any characters in a filename, but what we didn’t see in our original discussion was how the shell does that. The simple answer is that the shell expands the “\*” into something else (in this instance, the names of the files in the current working directory) before the **echo** command is executed. When the enter key is pressed, the shell automatically expands any qualifying characters on the command line before the command is carried out, so the **echo** command never saw the “\*”, only its expanded result. Knowing this, we can see that **echo** behaved as expected.

**Pathname Expansion**

The mechanism by which wildcards work is called *pathname expansion*. If we try some of the techniques that we employed in our earlier lessons, we will see that they are really expansions. Given a home directory that looks like this:

\[me@bgoonz me\]$ **ls** Desktop ls-output.txt Documents Music Pictures Public Templates Videos

we could carry out the following expansions:

\[me@bgoonz me\]$ **echo D\*** Desktop Documents

and:

\[me@bgoonz me\]$ **echo \*s** Documents Pictures Templates Videos

or even:

\[me@bgoonz me\]$ **echo \[\[:upper:\]\]\*** Desktop Documents Music Pictures Public Templates Videos

and looking beyond our home directory:

\[me@bgoonz me\]$ **echo /usr/\*/share** /usr/kerberos/share /usr/local/share

**Tilde Expansion**

As we recall from our introduction to the **cd** command, the tilde character (“~”) has a special meaning. When used at the beginning of a word, it expands into the name of the home directory of the named user, or if no user is named, the home directory of the current user:

\[me@bgoonz me\]$ **echo ~** /home/me

If user “foo” has an account, then:

\[me@bgoonz me\]$ **echo ~foo** /home/foo

**Arithmetic Expansion**

The shell allows arithmetic to be performed by expansion. This allow us to use the shell prompt as a calculator:

\[me@bgoonz me\]$ **echo $((2 + 2))** 4

Arithmetic expansion uses the form:

$((expression))

where expression is an arithmetic expression consisting of values and arithmetic operators.

Arithmetic expansion only supports integers (whole numbers, no decimals), but can perform quite a number of different operations.

Spaces are not significant in arithmetic expressions and expressions may be nested. For example, to multiply five squared by three:

\[me@bgoonz me\]$ **echo $(($((5\*\*2)) \* 3))** 75

Single parentheses may be used to group multiple subexpressions. With this technique, we can rewrite the example above and get the same result using a single expansion instead of two:

\[me@bgoonz me\]$ **echo $(((5\*\*2) \* 3))** 75

Here is an example using the division and remainder operators. Notice the effect of integer division:

\[me@bgoonz me\]$ **echo Five divided by two equals $((5/2))** Five divided by two equals 2 \[me@bgoonz me\]$ **echo with $((5%2)) left over.** with 1 left over.

**Brace Expansion**

Perhaps the strangest expansion is called *brace expansion*. With it, we can create multiple text strings from a pattern containing braces. Here’s an example:

\[me@bgoonz me\]$ **echo Front-{A,B,C}-Back** Front-A-Back Front-B-Back Front-C-Back

Patterns to be brace expanded may contain a leading portion called a *preamble* and a trailing portion called a *postscript*. The brace expression itself may contain either a comma-separated list of strings, or a range of integers or single characters. The pattern may not contain embedded whitespace. Here is an example using a range of integers:

\[me@bgoonz me\]$ **echo Number\_{1..5}** Number\_1 Number\_2 Number\_3 Number\_4 Number\_5

A range of letters in reverse order:

\[me@bgoonz me\]$ **echo {Z..A}** Z Y X W V U T S R Q P O N M L K J I H G F E D C B A

Brace expansions may be nested:

\[me@bgoonz me\]$ **echo a{A{1,2},B{3,4}}b** aA1b aA2b aB3b aB4b

So what is this good for? The most common application is to make lists of files or directories to be created. For example, if we were a photographer and had a large collection of images we wanted to organize into years and months, the first thing we might do is create a series of directories named in numeric “Year-Month” format. This way, the directory names will sort in chronological order. we could type out a complete list of directories, but that’s a lot of work and it’s error-prone too. Instead, we could do this:

\[me@bgoonz me\]$ **mkdir Photos** \[me@bgoonz me\]$ **cd Photos** \[me@bgoonz Photos\]$ **mkdir {2017..2019}-{01..12}** \[me@bgoonz Photos\]$ **ls** 2017–01 2017–07 2018–01 2018–07 2019–01 2019–07 2017–02 2017–08 2018–02 2018–08 2019–02 2019–08 2017–03 2017–09 2018–03 2018–09 2019–03 2019–09 2017–04 2017–10 2018–04 2018–10 2019–04 2019–10 2017–05 2017–11 2018–05 2018–11 2019–05 2019–11 2017–06 2017–12 2018–06 2018–12 2019–06 2019–12

Pretty slick!

**Parameter Expansion**

We’re only going to touch briefly on *parameter expansion* in this lesson, but we’ll be covering it more later. It’s a feature that is more useful in shell scripts than directly on the command line. Many of its capabilities have to do with the system’s ability to store small chunks of data and to give each chunk a name. Many such chunks, more properly called *variables*, are available for our examination. For example, the variable named “USER” contains our user name. To invoke parameter expansion and reveal the contents of USER we would do this:

\[me@bgoonz me\]$ **echo $USER** me

To see a list of available variables, try this:

\[me@bgoonz me\]$ **printenv | less**

With other types of expansion, if we mistype a pattern, the expansion will not take place and the echo command will simply display the mistyped pattern. With parameter expansion, if we misspell the name of a variable, the expansion will still take place, but will result in an empty string:

\[me@bgoonz me\]$ **echo $SUER** \[me@bgoonz ~\]$

**Command Substitution**

*Command substitution* allows us to use the output of a command as an expansion:

\[me@bgoonz me\]$ **echo $(ls)** Desktop Documents ls-output.txt Music Pictures Public Templates Videos

A clever one goes something like this:

\[me@bgoonz me\]$ **ls -l $(which cp)** -rwxr-xr-x 1 root root 71516 2007–12–05 08:58 /bin/cp

Here we passed the results of **which cp** as an argument to the **ls** command, thereby getting the listing of of the **cp** program without having to know its full pathname. We are not limited to just simple commands. Entire pipelines can be used (only partial output shown):

\[me@bgoonz me\]$ **file $(ls /usr/bin/\* | grep bin/zip)** /usr/bin/bunzip2: /usr/bin/zip: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.15, stripped /usr/bin/zipcloak: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.15, stripped /usr/bin/zipgrep: POSIX shell script text executable /usr/bin/zipinfo: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.15, stripped /usr/bin/zipnote: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.15, stripped /usr/bin/zipsplit: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.15, stripped

In this example, the results of the pipeline became the argument list of the file command. There is an alternate syntax for command substitution in older shell programs which is also supported in **bash**. It uses back-quotes instead of the dollar sign and parentheses:

\[me@bgoonz me\]$ **ls -l \`which cp\`** -rwxr-xr-x 1 root root 71516 2007–12–05 08:58 /bin/cp

**Quoting**

Now that we’ve seen how many ways the shell can perform expansions, it’s time to learn how we can control it. Take for example:

\[me@bgoonz me\]$ **echo this is a test** this is a test

or:

\[me@bgoonz me\]$ **\[me@bgoonz ~\]$ echo The total is $100.00** The total is 00.00

In the first example, word-splitting by the shell removed extra whitespace from the echo command’s list of arguments. In the second example, parameter expansion substituted an empty string for the value of “$1” because it was an undefined variable. The shell provides a mechanism called *quoting* to selectively suppress unwanted expansions.

**Double Quotes**

The first type of quoting we will look at is double quotes. If we place text inside double quotes, all the special characters used by the shell lose their special meaning and are treated as ordinary characters. The exceptions are “$”, “\\” (backslash), and “\`” (back- quote). This means that word-splitting, pathname expansion, tilde expansion, and brace expansion are suppressed, but parameter expansion, arithmetic expansion, and command substitution are still carried out. Using double quotes, we can cope with filenames containing embedded spaces. Imagine we were the unfortunate victim of a file called two words.txt. If we tried to use this on the command line, word-splitting would cause this to be treated as two separate arguments rather than the desired single argument:

\[me@bgoonz me\]$ **ls -l two words.txt** ls: cannot access two: No such file or directory ls: cannot access words.txt: No such file or directory

By using double quotes, we can stop the word-splitting and get the desired result; further, we can even repair the damage:

\[me@bgoonz me\]$ **ls -l “two words.txt”** -rw-rw-r — 1 me me 18 2020–02–20 13:03 two words.txt \[me@bgoonz me\]$ **mv “two words.txt” two\_words.txt**

There! Now we don’t have to keep typing those pesky double quotes. Remember, parameter expansion, arithmetic expansion, and command substitution still take place within double quotes:

\[me@bgoonz me\]$ **echo “$USER $((2+2)) $(cal)”** me 4 February 2020 Su Mo Tu We Th Fr Sa 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29

We should take a moment to look at the effect of double quotes on command substitution. First let’s look a little deeper at how word splitting works. In our earlier example, we saw how word-splitting appears to remove extra spaces in our text:

\[me@bgoonz me\]$ **echo this is a test** this is a test

By default, word-splitting looks for the presence of spaces, tabs, and newlines (linefeed characters) and treats them as delimiters between words. This means that unquoted spaces, tabs, and newlines are not considered to be part of the text. They only serve as separators. Since they separate the words into different arguments, our example command line contains a command followed by four distinct arguments. If we add double quotes:

\[me@bgoonz me\]$ **echo “this is a test”** this is a test

word-splitting is suppressed and the embedded spaces are not treated as delimiters, rather they become part of the argument. Once the double quotes are added, our command line contains a command followed by a single argument. The fact that newlines are considered delimiters by the word-splitting mechanism causes an interesting, albeit subtle, effect on command substitution. Consider the following:

\[me@bgoonz me\]$ **echo $(cal)** February 2020 Su Mo Tu We Th Fr Sa 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 \[me@bgoonz me\]$ **echo “$(cal)”** February 2020 Su Mo Tu We Th Fr Sa 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29

In the first instance, the unquoted command substitution resulted in a command line containing thirty-eight arguments. In the second, a command line with one argument that includes the embedded spaces and newlines.

**Single Quotes**

When we need to suppress all expansions, we use single quotes. Here is a comparison of unquoted, double quotes, and single quotes:

\[me@bgoonz me\]$ **echo text ~/\*.txt {a,b} $(echo foo) $((2+2)) $USER** text /home/me/ls-output.txt a b foo 4 me \[me@bgoonz me\]$ **echo “text ~/\*.txt {a,b} $(echo foo) $((2+2)) $USER”** text ~/\*.txt {a,b} foo 4 me \[me@bgoonz me\]$ **echo ‘text ~/\*.txt {a,b} $(echo foo) $((2+2)) $USER’** text ~/\*.txt {a,b} $(echo foo) $((2+2)) $USER

As we can see, with each succeeding level of quoting, more and more of the expansions are suppressed.

**Escaping Characters**

Sometimes we only want to quote a single character. To do this, we can precede a character with a backslash, which in this context is called the *escape character*. Often this is done inside double quotes to selectively prevent an expansion:

\[me@bgoonz me\]$ **echo “The balance for user $USER is: \\$5.00”** The balance for user me is: $5.00

It is also common to use escaping to eliminate the special meaning of a character in a filename. For example, it is possible to use characters in filenames that normally have special meaning to the shell. These would include “$”, “!”, “&”, “ “, and others. To include a special character in a filename we can to this:

\[me@bgoonz me\]$ **mv bad\\&filename good\_filename**

To allow a backslash character to appear, escape it by typing “\\\\”. Note that within single quotes, the backslash loses its special meaning and is treated as an ordinary character.

**More Backslash Tricks**

If we look at the **man** pages for any program written by the <a href="http://www.gnu.org/" class="markup--anchor markup--p-anchor">GNU project</a>, we will see that in addition to command line options consisting of a dash and a single letter, there are also long option names that begin with two dashes. For example, the following are equivalent:

ls -r ls — reverse

Why do they support both? The short form is for lazy typists on the command line and the long form is mostly for scripts though some options may only be available in long form. Sometimes it is better to use a long option when the option is obscure or we want to document more clearly what an option is. This is especially useful when writing scripts where maximum readability is desired, and besides, anytime we can save ourselves a trip to the man page is a good thing.

As we might suspect, using the long form options can make a single command line very long. To combat this problem, we can use a backslash to get the shell to ignore a newline character like this:

ls -l \\ — reverse \\ — human-readable \\ — full-time

Using the backslash in this way allows us to embed newlines in our command. Note that for this trick to work, the newline must be typed immediately after the backslash. If we put a space after the backslash, the space will be ignored, not the newline. Backslashes are also used to insert special characters into our text. These are called *backslash escape characters*. Here are the common ones:

The use of the backslash escape characters is very common. This idea first appeared in the C programming language. Today, the shell, C++, Perl, python, awk, tcl, and many other programming languages use this concept. Using the **echo** command with the -e option will allow us to demonstrate:

\[me@bgoonz me\]$ **echo -e “Inserting several blank lines\\n\\n\\n”** Inserting several blank lines \[me@bgoonz me\]$ **echo -e “Words\\tseparated\\tby\\thorizontal\\ttabs.”** Words separated by horizontal tabs \[me@bgoonz me\]$ **echo -e “\\aMy computer went \\”beep\\”.”** My computer went “beep”. \[me@bgoonz me\]$ **echo -e “DEL C:\\\\WIN2K\\\\LEGACY\_OS.EXE”** DEL C:\\WIN2K\\LEGACY\_OS.EXE

**Permissions**

The Unix-like operating systems, such as Linux differ from other computing systems in that they are not only *multitasking* but also *multi-user*.

What exactly does this mean? It means that more than one user can be operating the computer at the same time. While a desktop or laptop computer only has one keyboard and monitor, it can still be used by more than one user. For example, if the computer is attached to a network, or the Internet, remote users can log in via <a href="http://linuxcommand.org/lc3_man_pages/ssh1.html" class="markup--anchor markup--p-anchor"><strong>ssh</strong></a> (secure shell) and operate the computer. In fact, remote users can execute graphical applications and have the output displayed on a remote computer. The X Window system supports this.

The multi-user capability of Unix-like systems is a feature that is deeply ingrained into the design of the operating system. If we remember the environment in which Unix was created, this makes perfect sense. Years ago before computers were “personal,” they were large, expensive, and centralized. A typical university computer system consisted of a large mainframe computer located in some building on campus and *terminals* were located throughout the campus, each connected to the large central computer. The computer would support many users at the same time.

In order to make this practical, a method had to be devised to protect the users from each other. After all, we wouldn’t want the actions of one user to crash the computer, nor would we allow one user to interfere with the files belonging to another user.

This lesson will cover the following commands:

-   <span id="681f"><a href="http://linuxcommand.org/lc3_man_pages/chmod1.html" class="markup--anchor markup--li-anchor"><strong>chmod</strong></a> — modify file access rights</span>
-   <span id="22e9"><a href="http://linuxcommand.org/lc3_man_pages/su1.html" class="markup--anchor markup--li-anchor"><strong>su</strong></a> — temporarily become the superuser</span>
-   <span id="ca99"><a href="http://linuxcommand.org/lc3_man_pages/sudo8.html" class="markup--anchor markup--li-anchor"><strong>sudo</strong></a> — temporarily become the superuser</span>
-   <span id="b794"><a href="http://linuxcommand.org/lc3_man_pages/chown1.html" class="markup--anchor markup--li-anchor"><strong>chown</strong></a> — change file ownership</span>
-   <span id="87bd"><a href="http://linuxcommand.org/lc3_man_pages/chgrp1.html" class="markup--anchor markup--li-anchor"><strong>chgrp</strong></a> — change a file’s group ownership</span>

**File Permissions**

On a Linux system, each file and directory is assigned access rights for the owner of the file, the members of a group of related users, and everybody else. Rights can be assigned to read a file, to write a file, and to execute a file (i.e., run the file as a program).

To see the permission settings for a file, we can use the **ls** command. As an example, we will look at the **bash** program which is located in the /bin directory:

\[me@bgoonz me\]$ **ls -l /bin/bash** -rwxr-xr-x 1 root root 1113504 Jun 6 2019 /bin/bash

Here we can see:

-   <span id="c022">The file “/bin/bash” is owned by user “root”</span>
-   <span id="3508">The superuser has the right to read, write, and execute this file</span>
-   <span id="7354">The file is owned by the group “root”</span>
-   <span id="8400">Members of the group “root” can also read and execute this file</span>
-   <span id="2ccd">Everybody else can read and execute this file</span>

In the diagram below, we see how the first portion of the listing is interpreted. It consists of a character indicating the file type, followed by three sets of three characters that convey the reading, writing and execution permission for the owner, group, and everybody else.

**chmod**

The **chmod** command is used to change the permissions of a file or directory. To use it, we specify the desired permission settings and the file or files that we wish to modify. There are two ways to specify the permissions. In this lesson we will focus on one of these, called the *octal notation* method.

It is easy to think of the permission settings as a series of bits (which is how the computer thinks about them). Here’s how it works:

rwx rwx rwx = 111 111 111  
 rw- rw- rw- = 110 110 110  
 rwx — — — — = 111 000 000

and so on…

rwx = 111 in binary = 7  
 rw- = 110 in binary = 6  
 r-x = 101 in binary = 5  
 r — = 100 in binary = 4

Now, if we represent each of the three sets of permissions (owner, group, and other) as a single digit, we have a pretty convenient way of expressing the possible permissions settings. For example, if we wanted to set some\_file to have read and write permission for the owner, but wanted to keep the file private from others, we would:

\[me@bgoonz me\]$ **chmod 600 some\_file**

Here is a table of numbers that covers all the common settings. The ones beginning with “7” are used with programs (since they enable execution) and the rest are for other kinds of files.

**Becoming the Superuser for a Short While**

It is often necessary to become the superuser to perform important system administration tasks, but as we know, we should not stay logged in as the superuser. In most distributions, there is a program that can give you temporary access to the superuser’s privileges. This program is called **su** (short for substitute user) and can be used in those cases when you need to be the superuser for a small number of tasks. To become the superuser, simply type the **su** command. You will be prompted for the superuser’s password:

\[me@bgoonz me\]$ **su** Password: \[root@bgoonz me\]\#

After executing the **su** command, we have a new shell session as the superuser. To exit the superuser session, type **exit** and we will return to your previous session.

In most modern distributions, an alternate method is used. Rather than using **su**, these systems employ the **sudo** command instead. With **sudo**, one or more users are granted superuser privileges on an as needed basis. To execute a command as the superuser, the desired command is simply preceded with the **sudo** command. After the command is entered, the user is prompted for the their own password rather than the superuser’s:

\[me@bgoonz me\]$ **sudo some\_command** Password for me: \[me@bgoonz me\]$

In fact, modern distributions don’t even set the root account password thus making it impossible to log in as the root user. A root shell is still possible with **sudo** by using the “-i” option:

\[me@bgoonz me\]$ **sudo -i** Password for me: root@bgoonz:~\#

**Changing File Ownership**

We can change the owner of a file by using the **chown** command. Here’s an example: Suppose we wanted to change the owner of some\_file from “me” to “you”. We could:

\[me@bgoonz me\]$ **sudo chown you some\_file**

Notice that in order to change the owner of a file, we must have superuser privileges. To do this, our example employed the **sudo** command to execute **chown**.

**chown** works the same way on directories as it does on files.

**Changing Group Ownership**

The group ownership of a file or directory may be changed with **chgrp**. This command is used like this:

\[me@bgoonz me\]$ **chgrp new\_group some\_file**

In the example above, we changed the group ownership of some\_file from its previous group to “new\_group”. We must be the owner of the file or directory to perform a **chgrp**.

### Writing Scripts:

  

### Writing Your First Script!

  

To successfully write a shell script, we have to do three things:

1.  <span id="4b2a">Write a script</span>
2.  <span id="9e12">Give the shell permission to execute it</span>
3.  <span id="4768">Put it somewhere the shell can find it</span>

### Writing a Script

A shell script is a file that contains ASCII text. To create a shell script, we use a *text editor*. A text editor is a program, like a word processor, that reads and writes ASCII text files. There are many, many text editors available for Linux systems, both for the command line and GUI environments. Here is a list of some common ones:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*hkhhUZbaqqg2zO9DvyyRjA.png" class="graf-image" /></figure>

  

Let’s fire up our text editor and type in our first script as follows:

\#!/bin/bash \# My first script echo “Hello World!”

Clever readers will have figured out how to copy and paste the text into the text editor ;-)

This is a traditional “Hello World” program. Forms of this program appear in almost introductory programming book. We’ll save the file with some descriptive name. How about `hello_world`?

The first line of the script is important. It is a special construct, called a *shebang*, given to the system indicating what program is to be used to interpret the script. In this case, `/bin/bash`. Other scripting languages such as `Perl, awk, tcl, Tk,` and `python` also use this mechanism.

The second line is a *comment*. Everything that appears after a “\#” symbol is ignored by `bash`. As our scripts become bigger and more complicated, comments become vital. They are used by programmers to explain what is going on so that others can figure it out. The last line is the `echo` command. This command simply prints its arguments on the display.

### Setting Permissions

The next thing we have to do is give the shell permission to execute our script. This is done with the `chmod` command as follows:

\[me@linuxbox me\]$ `chmod 755 hello_world`

The “755” will give us read, write, and execute permission. Everybody else will get only read and execute permission. To make the script private, (i.e., only we can read and execute), use “700” instead.

### Putting It in Our Path

At this point, our script will run. Try this:

\[me@linuxbox me\]$ `./hello_world`

We should see “Hello World!” displayed.

Before we go any further, we need to talk about paths. When we type the name of a command, the system does not search the entire computer to find where the program is located. That would take a long time. We see that we don’t usually have to specify a complete path name to the program we want to run, the shell just seems to know.

Well, that’s correct. The shell does know. Here’s how: the shell maintains a list of directories where executable files (programs) are kept, and only searches the directories on that list. If it does not find the program after searching each directory on the list, it will issue the famous `command not found` error message.

This list of directories is called our *path*. We can view the list of directories with the following command:

\[me@linuxbox me\]$ `echo $PATH`

This will return a colon separated list of directories that will be searched if a specific path name is not given when a command is entered. In our first attempt to execute our new script, we specified a pathname (“./”) to the file.

We can add directories to our path with the following command, where *directory* is the name of the directory we want to add:

\[me@linuxbox me\]$ `export PATH=$PATH:directory`

A better way would be to edit our `.bash_profile` file to include the above command. That way, it would be done automatically every time we log in.

Most Linux distributions encourage a practice in which each user has a specific directory for the programs he/she personally uses. This directory is called `bin` and is a subdirectory of our home directory. If we do not already have one, we can create it with the following command:

\[me@linuxbox me\]$ `mkdir ~/bin`

If we move our script into our new `bin` directory we'll be all set. Now we just have to type:

\[me@linuxbox me\]$ `hello_world`

and our script will run. On some distributions, most notably Ubuntu (and other Debian-based distributions), we will need to open a new terminal session before our newly created `bin` directory will be recognized.

### Editing the Scripts We Already Have

Before we start writing new scripts, We’ll take a look at some scripts we already have. These scripts were put into our home directory when our account was created, and are used to configure the behavior of our sessions on the computer. We can edit these scripts to change things.

In this lesson, we will look at a couple of these scripts and learn a few important new concepts about the shell.

During our shell session, the system is holding a number of facts about the world in its memory. This information is called the *environment*. The environment contains such things as our path, our user name, and much more. We can examine a complete list of what is in the environment with the `set` command.

Two types of commands are often contained in the environment. They are *aliases* and *shell functions*.

### How is the Environment Established?

When we log on to the system, the bash program starts, and reads a series of configuration scripts called *startup files*. These define the default environment shared by all users. This is followed by more startup files in our home directory that define our personal environment. The exact sequence depends on the type of shell session being started. There are two kinds: a *login shell session* and a *non-login shell session*. A login shell session is one in which we are prompted for our user name and password; when we start a virtual console session, for example. A non-login shell session typically occurs when we launch a terminal session in the GUI.

Login shells read one or more startup files as shown below:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*0wWeUUHV2zMfEDeXTgh7MQ.png" class="graf-image" /></figure>In addition to reading the startup files above, non-login shells also inherit the environment from their parent process, usually a login shell.

Take a look at your system and see which of these startup files you have. Remember — since most of the file names listed above start with a period (meaning that they are hidden), you will need to use the “-a” option when using ls.

The `~/.bashrc` file is probably the most important startup file from the ordinary user’s point of view, since it is almost always read. Non-login shells read it by default and most startup files for login shells are written in such a way as to read the `~/.bashrc` file as well.

If we take a look inside a typical `.bash_profile` (this one taken from a CentOS system), it looks something like this:

\# .bash\_profile \# Get the aliases and functions if \[ -f ~/.bashrc \]; then . ~/.bashrc fi \# User specific environment and startup programs PATH=$PATH:$HOME/bin export PATH

Lines that begin with a “\#” are comments and are not read by the shell. These are there for human readability. The first interesting thing occurs on the fourth line, with the following code:

if \[ -f ~/.bashrc \]; then . ~/.bashrc fi

This is called an *if compound command*, which we will cover fully in a later lesson, but for now we will translate:

If the file “~/.bashrc” exists, then read the “~/.bashrc” file.

We can see that this bit of code is how a login shell gets the contents of `.bashrc`. The next thing in our startup file does is set the PATH variable to add the `~/bin` directory to the path.

Lastly, we have:

`export PATH`

The `export` command tells the shell to make the contents of the PATH variable available to child processes of this shell.

### Aliases

An alias is an easy way to create a new command which acts as an abbreviation for a longer one. It has the following syntax:

`alias name=value`

where *name* is the name of the new command and *value* is the text to be executed whenever *name* is entered on the command line.

Let’s create an alias called “l” and make it an abbreviation for the command “ls -l”. We’ll move to our home directory and using our favorite text editor, open the file `.bashrc` and add this line to the end of the file:

alias l=’ls -l’

By adding the `alias` command to the file, we have created a new command called "l" which will perform "ls -l". To try out our new command, close the terminal session and start a new one. This will reload the `.bashrc` file. Using this technique, we can create any number of custom commands for ourselves. Here is another one to try:

alias today=’date +”%A, %B %-d, %Y”’

This alias creates a new command called “today” that will display today’s date with nice formatting.

By the way, the `alias` command is just another shell builtin. We can create our aliases directly at the command prompt; however they will only remain in effect during the current shell session. For example:

\[me@linuxbox me\]$ `alias l='ls -l'`

### Shell Functions

Aliases are good for very simple commands, but to create something more complex, we need *shell functions*. Shell functions can be thought of as “scripts within scripts” or little sub-scripts. Let’s try one. Open `.bashrc` with our text editor again and replace the alias for "today" with the following:

today() { echo -n “Today’s date is: “ date +”%A, %B %-d, %Y” }

Believe it or not, `()` is a shell builtin too, and as with `alias`, we can enter shell functions directly at the command prompt.

\[me@linuxbox me\]$ `today() {` &gt; `echo -n "Today's date is: "` &gt; `date +"%A, %B %-d, %Y"` &gt; `}` \[me@linuxbox me\]$

However, like `alias`, shell functions defined directly on the command line only last as long as the current shell session.

  

  

### Here Scripts

Beginning with this lesson, we will construct a useful application. This application will produce an HTML document that contains information about our system. As we construct our script, we will discover step by step the tools needed to solve the problem at hand.

### Writing an HTML File with a Script

As we may be aware, a well formed HTML file contains the following content:

  

    <html>
    <head>
        <title>
        The title of your page
        </title>
    </head>

    <body>
        Your page content goes here.
    </body>
    </html>

  

Now, with what we already know, we could write a script to produce the above content:

    #!/bin/bash

    # sysinfo_page - A script to produce an html file

    echo "<html>"
    echo "<head>"
    echo "  <title>"
    echo "  The title of your page"
    echo "  </title>"
    echo "</head>"
    echo ""
    echo "<body>"
    echo "  Your page content goes here."
    echo "</body>"
    echo "</html>"

  

This script can be used as follows:

\[me@linuxbox me\]$ `sysinfo_page > sysinfo_page.html`

It has been said that the greatest programmers are also the laziest. They write programs to save themselves work. Likewise, when clever programmers write programs, they try to save themselves typing.

The first improvement to this script will be to replace the repeated use of the `echo` command with a single instance by using quotation more efficiently:

    #!/bin/bash

    # sysinfo_page - A script to produce an HTML file

    echo "<html>
     <head>
       <title>
       The title of your page
       </title>
     </head>
     
     <body>
       Your page content goes here.
     </body>
     </html>"

Using quotation, it is possible to embed carriage returns in our text and have the `echo` command's argument span multiple lines.

While this is certainly an improvement, it does have a limitation. Since many types of markup used in HTML incorporate quotation marks themselves, it makes using a quoted string a little awkward. A quoted string can be used but each embedded quotation mark will need to be escaped with a backslash character.

In order to avoid the additional typing, we need to look for a better way to produce our text. Fortunately, the shell provides one. It’s called a *here script*.

    #!/bin/bash

    # sysinfo_page - A script to produce an HTML file

    cat << _EOF_
    <html>
    <head>
        <title>
        The title of your page
        </title>
    </head>

    <body>
        Your page content goes here.
    </body>
    </html>
    _EOF_

A here script (also sometimes called a here document) is an additional form of <a href="http://linuxcommand.org/lc3_lts0070.php" class="markup--anchor markup--p-anchor">I/O redirection</a>. It provides a way to include content that will be given to the standard input of a command. In the case of the script above, the standard input of the `cat` command was given a stream of text from our script.

A here script is constructed like this:

`command` &lt;&lt; token content to be used as command's standard input token

*token* can be any string of characters. “\_EOF\_” (EOF is short for “End Of File”) is traditional, but we can use anything as long as it does not conflict with a bash reserved word. The token that ends the here script must exactly match the one that starts it, or else the remainder of our script will be interpreted as more standard input to the command which can lead to some really exciting script failures.

There is one additional trick that can be used with a here script. Often, we might want to indent the content portion of the here script to improve the readability of the script. We can do this if we change the script as follows:

    #!/bin/bash

    # sysinfo_page - A script to produce an HTML file

    cat <<- _EOF_
        <html>
        <head>
            <title>
            The title of your page
            </title>
        </head>

    <body>
            Your page content goes here.
        </body>
        </html>
    _EOF_

Changing the “&lt;&lt;” to “&lt;&lt;-” causes bash to ignore the leading tabs (but not spaces) in the here script. The output from the cat command will not contain any of the leading tab characters. This technique is a bit problematic, as many text editors are configured (and desirably so) to use sequences of spaces rather than tab characters.

O.k., let’s make our page. We will edit our page to get it to say something:

    #!/bin/bash

    # sysinfo_page - A script to produce an HTML file

    cat <<- _EOF_
        <html>
        <head>
            <title>
            My System Information
            </title>
        </head>

    <body>
        <h1>My System Information</h1>
        </body>
        </html>
    _EOF_

  

[View original.](https://medium.com/p/8a831acc3def)

Exported from [Medium](https://medium.com) on October 14, 2021.
