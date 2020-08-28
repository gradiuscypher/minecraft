var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "mapType": true
        },
        "cacheTag": "1598648585"
    },
    "tilesets": [
        {
            "north_direction": 0,
            "poititle": "Markers",
            "maxZoom": 8,
            "minZoom": 0,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "showlocationmarker": true,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "last_rendertime": 1598648179,
            "isOverlay": false,
            "defaultZoom": 1,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8
        }
    ]
};
