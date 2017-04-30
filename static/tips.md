### Turning off the touchpad on a Linux computer
Many Lenovo computers come with both touchpads and the famous IMB pointer, a little red button nestled in 
the centre of the keyboard used for moving the cursour without needing to move your hands far. This is 
very useful, except that when typing it is easy to accidentally touch the touchpad. The cursor can move
when you do not want it to, causing all sorts of problems. The solution to this for me used to be to install
another program, from a private ppa, using:
	sudo add-apt-repository ppa:atareao/atareao
	sudo apt-get update
	sudo apt-get install touchpad-indicator
This worked fine, but adds complexity and clutter to your system, with an additional icon in the top bar
(do you really need to be told when the touchpad is disabled - just trying to use it should be enough of 
an 'indicator') and a new ppa for the system to keep updated. 

There is a much simpler solution [it turns out](http://stackoverflow.com/questions/235839/how-do-i-indent-multiple-lines-quickly-in-vi):

	xinput list

This will display a list of all your input devices in the terminal. To disable the touchpad, simply identify the 
touchpad (on my system, this was id=11):

	⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
	⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
	⎜   ↳ TPPS/2 IBM TrackPoint                   	id=13	[slave  pointer  (2)]
	⎜   ↳ SynPS/2 Synaptics TouchPad              	id=11	[slave  pointer  (2)]
	⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
	    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
	    ↳ Power Button                            	id=6	[slave  keyboard (3)]
	    ↳ Video Bus                               	id=7	[slave  keyboard (3)]
	    ↳ Sleep Button                            	id=8	[slave  keyboard (3)]
	    ↳ Integrated Camera                       	id=9	[slave  keyboard (3)]
	    ↳ AT Translated Set 2 keyboard            	id=10	[slave  keyboard (3)]
	    ↳ ThinkPad Extra Buttons                  	id=12	[slave  keyboard (3)]

Then you type the following command to disable it, simple as that!

	xinput set-prop 11 "Device Enabled" 0
### Moving files whilst maintaining structure
If working on a project that only needs backups of certain filetypes, it is useful to save them, keeping the 
structure of folders from which they came intact. This is tricky if not impossible to do from Windows Explorer 
or any GUI-based file manager. From a Unix terminal, like so many administrative computing tasks, the job is 
quite easy. If you only know how. 

Say you want to only backup the .tex files in a LaTeX project, as these take up little space and are the only
ones that frequently change. To do this you need to first search for all .tex files:

		find . -name '*.tex'

This is fine, but presents the files as a flat list. To copy the files, maintaining the file structure, the 
files must be piped to another command, `cpio`. The full command was:

	find . -name '*.tex' | cpio -pdm /home/robin/backups

Job done!

### Installing Kingsoft office
The following commands install the excellent M$ Office alternative on your computer [in a flash](http://www.noobslab.com/2013/05/microsoft-office-alternative-kingsoft.html):
 	cd && wget -O kingsoft-office-NoobsLab.deb http://goo.gl/1iAW65
	sudo dpkg -i kingsoft-office-NoobsLab.deb
	rm kingsoft-office-NoobsLab.deb

