
export type User = {
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
    state?: string;
    number: number;
  }
}

function showMessage(user: User) {
  return `Olá ${user.name}! Seu e-mail é ${user.email} e seu endereço é: ${user.address.street}, ${user.address.city} - ${user.address.state} - ${user.address.number}`;
}


showMessage({  
  name: 'Jhon Doe',
  email: 'jhondoe@email.com',
  address: {
    city: 'San Francisco',
    street: 'Main Street No. 1',
    state: 'California',
    number: 132,
  }
})

