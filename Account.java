public class Account {
    private int accountNumber;
    private double balance;
    private Customer owner;

    public Account(int accountNumber, Customer owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        } else {
            System.out.println("Insufficient funds.");
        }
    }

    public void transfer(Account recipient, double amount) {
        if (balance >= amount) {
            withdraw(amount);
            recipient.deposit(amount);
        } else {
            System.out.println("Insufficient funds.");
        }
    }

    // Getters and setters
}

public class Customer {
    private String name;
    private String address;
    private List<Account> accounts;

    public Customer(String name, String address) {
        this.name = name;
        this.address = address;
        accounts = new ArrayList<>();
    }

    public void addAccount(Account account) {
        accounts.add(account);
    }

    // Other methods...
}

public class Bank {
    private List<Customer> customers;
    private List<Account> accounts;

    public Bank() {
        customers = new ArrayList<>();
        accounts = new ArrayList<>();
    }

    public void addCustomer(Customer customer) {
        customers.add(customer);
    }

    public void addAccount(Account account) {
        accounts.add(account);
    }

    // Other methods...
}
