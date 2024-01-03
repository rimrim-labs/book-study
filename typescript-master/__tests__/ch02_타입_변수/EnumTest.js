describe('자바스크립트로 enum을 생성한다.', () => {
    test('클로저로 enum을 생성한다.', () => {
        // given
        let DoorState;

        // when
        (function(DoorState) {
           DoorState[DoorState['Open'] = 0] = 'Open';
           DoorState[DoorState['Closed'] = 1] = 'Closed';
           DoorState[DoorState['Ajar'] = 2] = 'Ajar';
       }(DoorState || (DoorState = {})));

        // then
        expect(DoorState[0]).toBe('Open');
        expect(DoorState['Open']).toBe(0);
    });
})