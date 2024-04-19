using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Account")]
    public class BankAccount
    {
        [Key]
        public String AccountNumber { get; set; }

        public String AccountHolderName { get; set; }

        
        public String BankName { get; set; }

       
        public String Address { get; set; }

       
        public Double Balance { get; set; }

        
    }
}

