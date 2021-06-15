BRACKET EXTENSION
=================================
BASIC OVERVIEW
-----------------------------------
The extension tells you which gates can be run in which quantum computer based on the logic that: 

For `RIGETTI`, native gates are `iSWAP`, `CZ`, `Rx` , `Ry` and `Rz`.

For `IONQ`, native gates are `XX` and `Ry`.

For example, if you have this code block:
```
def bracket {
    // comments will be ignored
    bit[2] b;  
    reset anc;  
    Rz q[0];    
    iSWAP anc;
    ccx anc[0], anc[1], psi;
    Ry psi;  
    ccx anc[0], anc[1], psi;       
    return b;  
}
```

You will get the final outpus as:
```
Can run Rz on  Rigetti hardware.
Can run Ry on  ionQ,  Rigetti hardware.
Can run iSWAP on  Rigetti hardware.
```
in the terminal. This means this function can be run on a Rigetti Quantum Computer.



Method to use the Extension
-----------------------------------

The UI of the extension is unfortunately not very smooth. Additionally note that you need Nodejs to run this extension. There are 3 steps to get the final output:

STEP 1 (Button)
-----------------------------------
The extension automatically creates a planet Jupyter Cell icon in the toolbar of Jupyter notebook. First of all, you have to put your cursor and click on the function declaration line (for example `def qubit_rotate {` is the function declaration line). Then you have to press the  planet Jupyter Cell icon which will give you a pop-up with the text: `The functionbody you copied is: \\relevant function body`. All form of comments (block\single) will be ignored. By pressing this button, the function body will be automatically copied to the clipboard. 
![image](https://user-images.githubusercontent.com/59942853/122107160-c79d1780-cde8-11eb-824e-6de7d52fe678.png)


STEP 2 (Open terminal in bracket_extension directory)
-----------------------------------
Now when you install Jupyter Notebook extensions, you will have a file named `nbextensions`. The extension `bracket_extension` is a folder in this `nbextensions` folder. The `bracket_extension` file will generally be in the directory shown below where `USERNAME` is your username.
`C:\Users\USERNAME\Anaconda3\new\envs\bracket\Lib\site-packages\jupyter_contrib_nbextensions\nbextensions\bracket_extension`.
Once you are in this directory you have to open the command prompt. Your teminal will show something like:
![image](https://user-images.githubusercontent.com/59942853/122107504-2367a080-cde9-11eb-8a67-72fac40a8e60.png)
where the white area is your username.

STEP 3 (Terminal)
-----------------------------------
In the terminal you have to give the following command : `node modules\nodescript.js`. Then in the same terminal window you will be asked for input. You then have to just paste in this section and then press enter (You can paste by simply pressing the right mouse button). This will give you the desired output.



POSSIBLE IMPROVEMENTS
-----------------------------------
This extension has many scopes of improvement. Some are listed below:

1. The user experience can be improved by reducing the number of steps needed to run this extension. 
2. The grammar file: `gram.g4` in the `bracket_extension\modules` file can be improved and more gates can be included.
3. The `HTMLQCListener.js` in the `bracket_extension\modules` file can be edited so that the final output is like "`This function can be run on ... hardware`" where `...` can be IonQ, Rigetti or Null.

Helpful Sources
--------------------------------

1. https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c
2. https://tomassetti.me/antlr-mega-tutorial/
3. https://stackoverflow.com/questions/1931307/antlr-is-there-a-simple-example




