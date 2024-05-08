import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class AutoSlide extends JFrame implements ActionListener {
    private Timer timer;
    private JLabel label;
    private ImageIcon[] images;
    private int currentIndex;

    public AutoSlide() {
        super("Auto Slide");

        images = new ImageIcon[4]; // Ganti dengan jumlah gambar Anda
        images[0] = new ImageIcon("_DSC5974.JPG"); // Ganti dengan nama gambar dan path yang sesuai
        images[1] = new ImageIcon("DSC_0124.JPG");
        images[2] = new ImageIcon("Istana.jpg");
        images[3] = new ImageIcon("Masjid.jpg");

        label = new JLabel();
        add(label, BorderLayout.CENTER);

        timer = new Timer(2000, this); // Ganti dengan waktu delay (dalam milidetik)
        timer.start();

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (currentIndex == images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        label.setIcon(images[currentIndex]);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new AutoSlide(),
            }
        });
    }
}
