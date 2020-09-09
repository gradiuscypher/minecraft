var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "imgextension": "png",
            "defaultZoom": 1,
            "world": "world",
            "minZoom": 0,
            "maxZoom": 8,
            "path": "day",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "north_direction": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1599656179,
            "isOverlay": false,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599656569",
        "debug": true,
        "controls": {
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true
        }
    },
    "worlds": [
        "world"
    ]
};
