using AppDonaVida.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppDonaVida.Config;

public class DonationRecordConfig : IEntityTypeConfiguration<DonationRecord>
{
    private const string adminId = "B22698B8-42A2-4115-9631-1C2D1E2AC5F7";
    private const string centerId = "cruzroja";
    private const int donationId = 1;
    public void Configure(EntityTypeBuilder<DonationRecord> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasOne(x => x.CenterDonor)
            .WithMany(x => x.DonationsRecord)
            .HasForeignKey(x => x.IdCenterDonation);

        builder.HasData(new DonationRecord()
        {
            Id = donationId,
            Date = DateTime.Now,
            Quantity = 3,
            IdCenterDonation = centerId,
            IdUser = adminId
        });
    }
}
