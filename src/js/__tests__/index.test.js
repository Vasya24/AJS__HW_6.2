import { Character } from '../../index'

test('Causing damage', () => {
    let vasya = new Character('Bazelius', 'Swordsman');
    vasya.damage(78);
    expect(vasya.health).toBe(53.2)
})