using AppDonaVida.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppDonaVida.Config;

public class CenterDonorConfig : IEntityTypeConfiguration<DonationRecord>
{
    public void Configure(EntityTypeBuilder<DonationRecord> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();
    }
}
