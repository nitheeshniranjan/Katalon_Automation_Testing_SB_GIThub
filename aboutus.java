pubpackage umsSPEC;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class AboutUs extends JFrame {

    JLabel lb1, lb2, imlbl, imlbl1;

    public AboutUs() {
        super("SPEC - About Us");
        // Set application icon
        ImageIcon ic = new ImageIcon(getClass().getResource("/icons/icon13.jpg"));
        Image im = ic.getImage().getScaledInstance(25, 25, Image.SCALE_DEFAULT);
        setIconImage(im);
        setType(Type.NORMAL);
        setResizable(false);
        setLayout(null);
        setBounds(358, 208, 620, 410);
        getContentPane().setBackground(new Color(255, 250, 199));

        // Set logo image
        ImageIcon ic
    
    }
}