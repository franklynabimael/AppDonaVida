namespace AppDonaVida.Models;

public class DonationRecord

{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public float Quantity { get; set; }
    public string IdCenterDonation { get; set; }
    public CenterDonor CenterDonor { get; set; }
    public string IdUser { get; set; }
    public User UserRecord { get; set; }
}
