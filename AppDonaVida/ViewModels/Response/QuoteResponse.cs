namespace AppDonaVida.ViewModels.Response;

public class QuoteResponse
{
    public string Id { get; set; }
    public DateTime Date { get; set; }
    public string IdUser { get; set; }
    public string IdCenter { get; set; }
    public bool IsAproved { get; set; }

}
