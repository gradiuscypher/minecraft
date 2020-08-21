var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1598022169",
        "debug": true
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "minZoom": 0,
            "defaultZoom": 1,
            "base": "",
            "world": "world",
            "name": "Daytime Render",
            "isOverlay": false,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598021779,
            "maxZoom": 8,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "imgextension": "png"
        }
    ]
};
