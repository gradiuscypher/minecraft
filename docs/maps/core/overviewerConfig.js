var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "zoomLevels": 10,
            "imgextension": "png",
            "path": "day",
            "base": "",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597388280,
            "maxZoom": 10,
            "north_direction": 0,
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "debug": true,
        "cacheTag": "1597388482"
    },
    "worlds": [
        "Core01"
    ]
};
