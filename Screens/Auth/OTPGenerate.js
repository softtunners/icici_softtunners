import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Color from '../../Styling/Color';

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop:20,marginBottom:40 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 42,
        fontSize: 20,
        fontWeight:'bold',
        borderWidth: 2,
        borderColor: '#e83c1a40',
        textAlign: 'center',
        borderRadius:5,
        color:Color.dark
    },
    focusCell: {
        borderColor: Color.primary,
    },
});

const CELL_COUNT = 6;

const OtpPage = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
            )}
        />
    );
};

export default OtpPage