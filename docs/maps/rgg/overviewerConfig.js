var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1595199760"
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "imgextension": "png",
            "path": "day",
            "base": "",
            "defaultZoom": 1,
            "north_direction": 0,
            "maxZoom": 8,
            "minZoom": 0,
            "isOverlay": false,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "world": "world",
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "last_rendertime": 1595199379,
            "bgcolor": "#1a1a1a"
        }
    ]
};
