package com.sohrabsaran.skilldemos.util;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class UtilTest {

    @Test
    public void testLeftOf() {
        String s = Util.leftOf("a","a");
        assertEquals("",s);
    }
}
