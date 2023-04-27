using AppDonaVida.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppDonaVida.Config;

public class QuoteConfig : IEntityTypeConfiguration<Quote>
{
    public void Configure(EntityTypeBuilder<Quote> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasOne(x => x.CenterDonor)
            .WithMany(x => x.QuotesCenter)
            .HasForeignKey(x => x.IdCenter);
    }
}
