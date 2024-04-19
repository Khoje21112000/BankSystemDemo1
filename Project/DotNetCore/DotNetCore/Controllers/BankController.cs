using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;
using DotNetCore.DBContext;
using System.Threading.Tasks;

namespace DotNetCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BankController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BankController(AppDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        // POST: api/Bank/register
        [HttpPost("api/Bank/register")]
        public async Task<IActionResult> Register(BankAccount bankAccount)
        {
            if (ModelState.IsValid)
            {
                _context.BankAccounts.Add(bankAccount);
                await _context.SaveChangesAsync();
                return Ok("Bank account registered successfully");
            }

            return BadRequest("Invalid bank account data");
        }

        // PUT: api/Bank/update/5
        [HttpPut("update/{AccountNumber}")]
        public async Task<IActionResult> Update(String AccountNumber, BankAccount bankAccount)
        {
            if (AccountNumber != bankAccount.AccountNumber)
            {
                return BadRequest("Invalid bank account number");
            }

            _context.Entry(bankAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok("Bank account updated successfully");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankAccountExists(AccountNumber))
                {
                    return NotFound("Bank account not found");
                }
                else
                {
                    throw;
                }
            }
        }

        // DELETE: api/Bank/delete/5
        [HttpDelete("delete/{AccountNumber}")]
        public async Task<IActionResult> Delete(String AccountNumber)
        {
            var bankAccount = await _context.BankAccounts.FindAsync(AccountNumber);
            if (bankAccount == null)
            {
                return NotFound("Bank account not found");
            }

            _context.BankAccounts.Remove(bankAccount);
            await _context.SaveChangesAsync();

            return Ok("Bank account deleted successfully");
        }

        private bool BankAccountExists(String AccountNumber)
        {
            return _context.BankAccounts.Any(e => e.AccountNumber == AccountNumber);
        }
    }
}
