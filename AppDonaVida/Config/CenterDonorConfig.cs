using AppDonaVida.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppDonaVida.Config;

public class CenterDonorConfig : IEntityTypeConfiguration<CenterDonor>
{
    private const string adminId = "B22698B8-42A2-4115-9631-1C2D1E2AC5F7";
    private const string centerId = "cruzroja";


    public void Configure(EntityTypeBuilder<CenterDonor> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasData(new CenterDonor()
        {
            Id = centerId,
            Name = "CruzRoja",
            Addres = "Sancristobal",
            Province = "Sancristobal",
            Phone = "8497505944"
        });
    }
}
