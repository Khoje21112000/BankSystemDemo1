﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("User")]
    public class User
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		public string Email { get; set; }

		[Column("first_name")]
		public string FirstName { get; set; }

        [Column("last_name")]
        public string LastName { get; set; }

        [Column("mobile_no")]
        public string MobileNo { get; set; }

		public string Password { get; set; }
	}
}

