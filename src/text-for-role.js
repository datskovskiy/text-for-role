const textForRole = (roles, textLines) => {
    let result = '';
    let textArr = textLines.split('\n');

    for (let i = 0; i < roles.length; i++) {
        const role = roles[i];
        result = `${result}${role}:\n`;
        let findedRole = false;

        for (let k = 0; k < textArr.length; k++) {
            const textLine = textArr[k];
            const position = textLine.indexOf(role);
            if (position === -1)
                continue;

            findedRole = true;
            result = `${result}${k + 1}) ${textLine.slice(position + role.length + 2)}\n`;
        }

        if (findedRole)
            result =`${result}\n`;    
    }

    return result;
}

module.exports = textForRole;

