const UserDB = require('./userDB');
const axios = require('axios');
const validAvatar = require("../__mocks__/validAvatar.json");
const invalidAvatar = require("../__mocks__/invalidAvatar.json");

jest.mock('axios')
jest.mock('../__mocks__/reportError')

describe("totalUsers", () => {
    it('returns zero when no users', () => {
        const subject = new UserDB();

        expect(subject.totalUsers).toBe(0);
    })

    test('returns count of users', () => {
        const subject = new UserDB([
            {email: 'Artur@google.com'},
            {email: 'Tester@google.com'}
        ]);

        expect(subject.totalUsers).toBeGreaterThan(1);
    })
})

describe("add", () => {
    it('adds user', () => {
        const subject = new UserDB();
        const initialCount = subject.totalUsers;

        subject.add({email: 'mariusz@g.com'})

        expect(subject.totalUsers).toBeGreaterThan(initialCount);
    })

    it('throws error when no email given', () => {
        let subject = new UserDB();

        expect(() => {
            subject.add({
                email: null
            });
        }).toThrow('email needed');
    })

    it('throws error when email duplicated', () => {
        let subject = new UserDB([{
            email:"some@g.pl"
        }]);

        expect(() => {
            subject.add({
                email:"some@g.pl"
            }).toThrow("email not unique");
        })
    })
})

describe("random", () => {
    it("rejects when no users", async () => {
        const subject = new UserDB();

        try{
            await subject.random();
        }
        catch(e){
            expect(e).toEqual('No users...');
        }
    })

    it('returns random user', async() => {
        const subject = new UserDB();

        const luckyEmails = [
            'lucy0@g.pl',
            'lucy1@g.pl',
            'lucy2@g.pl',
        ];

        luckyEmails.forEach(email => subject.add({ 
            email 
        }));

        const luckyGuy = await subject.random();
        expect(luckyEmails).toContain(luckyGuy.email);
    })
})

describe('random avatar',  () => {
    test("check if api returns random avatar", async () => {
        axios.get.mockImplementationOnce(() => {
            return Promise.resolve({data: validAvatar})
        })
        let subject = new UserDB();
        let avatar = await subject.randomAvatar();

        expect(avatar).toBe("https://randomuser.me/api/portraits/thumb/women/79.jpg");
    })

    test("temp avatar when service not responding", async () => {
        axios.get.mockImplementationOnce(() => {
            return Promise.reject({data: 'some error...'})
        })
        let subject = new UserDB();
        let avatar = await subject.randomAvatar();

        expect(avatar).toBe("/temporaryAvatar.jpg");
    })

/*
    test("temp avatar when payload is wrong", async () => {
        axios.get.mockImplementationOnce(() => {
            return Promise.resolve({data: invalidAvatar})
        })
        let subject = new UserDB();
        let avatar = await subject.randomAvatar();

        expect(avatar).toBe("/temporaryAvatar.jpg");
    })*/
})