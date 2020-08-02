var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596369764",
        "debug": true,
        "controls": {
            "compass": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true
        }
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "isOverlay": false,
            "zoomLevels": 8,
            "north_direction": 0,
            "name": "Daytime Render",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1596369379,
            "base": "",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "world": "world",
            "maxZoom": 8,
            "path": "day",
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png"
        }
    ],
    "worlds": [
        "world"
    ]
};
