var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "defaultZoom": 1,
            "last_rendertime": 1599533779,
            "north_direction": 0,
            "isOverlay": false,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "path": "day",
            "poititle": "Markers",
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1599534171",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
