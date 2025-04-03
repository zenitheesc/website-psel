import React from "react";
import TextInfo from "./TextInfo";

export default function Logo() {
  return (
    <div style={{ width: "100%", height: "20%" }}>
      <TextInfo counter={0} target={0}>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "1px",
          }}
        >
          {`                                                                                                                                                                                                                                                                                                      
                                1111000000000000000000000000001111                                                                                                                                                                                                                                                                     
                           11000000000000000000000000000000000000000111                                                                                                                                                                                                                                                                  
                       1100000000000000000000000000000000000000000000000011                                                                                                                                                                                                                                                              
                    1000000000000000000000000000000000000000000000000000000011                                                                                                                                                                                                                                                           
                 1000000000000000111111111111111111100000000000000000000000000011                                                                                                                                                                                                                                                        
              10000000001111                            111100000000000000000000001                                                                                                                                                                                                                                                      
            1000000011                                       110000000000000000000001                                                                                                                                                                                                                                                    
          10000111                                               110000000000000000001                                                                                                                                                                                                                                                   
        100011                                                      10000000000000000001                                                                                                                                                                                                                                                 
      1011                                                            100000000000000001                                                                                                                                                                                                                                                 
     11                                                             1000000000000000011                                                                                                                                                                                                                                                  
                                                                 1100000000000000001            1111111111111111111111111111111111111                1111                               1111111               1111111             111111111111111111111111111111111111111             1111111                           1111111        
                                                              11000000000000000011              00000000000000000000000000000000000001             100000011                            0000000              100000001            0000000000000000000000000000000000000001           10000000                          10000000           
                                                            1100000000000000001                 00000000000000000000000000000000000001             00000000011                          0000000              100000001            0000000000000000000000000000000000000001           10000000                          10000000           
                                                          1000000000000000001                   00000000000000000000000000000000000001             0000000000001                        0000000              100000001            0000000000000000000000000000000000000001           10000000                          10000000           
                                                       11000000000000000011                     0000000111111111111111111111111111111              000000000000001                      0000000              100000001            111111111111111100000001111111111111111            10000000                          10000000           
                                                     1000000000000000001                        00000001                                           00000000000000001                    0000000              100000001                            0000000                            10000000                          10000000           
                                         11100000011000000000000000001                          00000001                                           000000000000000001                   0000000              100000001                            0000000                            10000000                          10000000           
                                      11000000000000000000000000001                             00000001                                           00000001 100000000001                0000000              100000001                            0000000                            10000000                          10000000           
                                     1000000000000000000000000001                               00000001                                           00000001   100000000001              0000000              100000001                            0000000                            10000000                          10000000           
                                    000000000000000000000000001                                 00000001    111111111111111111111111               00000001     100000000001            0000000              100000001                            0000000                            10000000     11111111111111111111100000000           
                                   10000000000000000000000001                                   00000001    100000000000000000000000               00000001       100000000001          0000000              100000001                            0000000                            10000000     00000000000000000000000000000           
                                   0000000000000000000000000                                    00000001    100000000000000000000000               00000001         100000000001        0000000              100000001                            0000000                            10000000     00000000000000000000000000000           
                                  10000000000000000000000000                                    00000001    111111111111111111111111               00000001           100000000001      0000000              100000001                            0000000                            10000000     11111111111111111111100000000           
                                 100000000000000000000000001                                    00000001                                           00000001             100000000001    0000000              100000001                            0000000                            10000000                          10000000           
                              11000000000000000000000000000                                     00000001                                           00000001               100000000001  0000000              100000001                            0000000                            10000000                          10000000           
                            1000000000000000000000000000001                                     00000001                                           00000001                 1000000000010000000              100000001                            0000000                            10000000                          10000000           
                          1000000000000000000000000000001                                       00000001                                           00000001                   10000000000000000              100000001                            0000000                            10000000                          10000000           
                       11000000000000000000000000000011                                         00000001                                           00000001                     100000000000000              100000001                            0000000                            10000000                          10000000           
                     10000000000000000001  11111111                                             00000000000000000000000000000000000001             00000001                       1000000000000              100000001                            0000000                            10000000                          10000000           
                  100000000000000000001                                                         00000000000000000000000000000000000001             00000001                         10000000001              100000001                            0000000                            10000000                          10000000           
                100000000000000000011                                                           00000000000000000000000000000000000001             00000001                           100000001              100000001                            0000000                            10000000                          10000000           
             110000000000000000001                                                              11111111111111111111111111111111111111             1111111                              110001                1111111                             1111111                            11111111                          11111111           
           100000000000000000011                                                                                                                                                                                                                                                                                                          
        1100000000000000000011                                                                                                                                                                                                                                                                                                            
      100000000000000000001                                                             1                                                                                                                                                                                                                                                 
       10000000000000000001                                                         11001                                                                                                                                                                                                                                                 
        1000000000000000000001                                                  1100000                                                                                                                                                                                                                                                   
          100000000000000000000011                                          1110000001                                            11               111111111111       1111111111111            1111111111            111111111111        1111111111111             111               11111111111       111111111111                       
            10000000000000000000000111                                 11100000000001                                           100001             00111111111        10011111111100         10011111111001        10011111111111        10011111111001           10001            100011111111        100111111111                       
              100000000000000000000000001111                    1111000000000000001                                            10011001            001                101         001       100          101       1001                  101         00          101 100           001                 100                                
                11000000000000000000000000000000011111111110000000000000000000001                                             100    001           001 0000001        101        1001       101          100        1100000000001        101        101         001   1001        100                  100 10000001                       
                   110000000000000000000000000000000000000000000000000000000001    1111111111111111111111111111111111111111  101 11110001          001                101 100000001         100          101                   001       101 100000001        1001 11110001        001                 100           111111111            
                      110000000000000000000000000000000000000000000000000011                                               1001        1001        001111111111       101       1001         10001111111001         11111111111001       101                 100         101        100111111111       100111111111                       
                          11000000000000000000000000000000000000000000011                                                  111          111        111111111111       111         111          1111111111           111111111111         111                111           111         1111111111        11111111111                     
                              111000000000000000000000000000000000111                                                                                                                                                                                                                                                                   
                                   11111100000000000000000011111                                                                                                                                                                                                                                                                        
                                                 11`}
        </pre>
      </TextInfo>
    </div>
  );
}
