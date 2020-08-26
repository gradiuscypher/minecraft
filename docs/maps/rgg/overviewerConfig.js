var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "north_direction": 0,
            "showlocationmarker": true,
            "poititle": "Markers",
            "minZoom": 0,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "world": "world",
            "defaultZoom": 1,
            "zoomLevels": 8,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "base": "",
            "imgextension": "png",
            "last_rendertime": 1598460979,
            "path": "day",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true
        },
        "cacheTag": "1598461367",
        "debug": true,
        "north_direction": "lower-left"
    }
};
