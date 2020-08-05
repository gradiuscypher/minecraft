var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
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
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "map": {
        "controls": {
            "zoom": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true
        },
        "cacheTag": "1596600161",
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "minZoom": 0,
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "last_rendertime": 1596599779,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "zoomLevels": 8,
            "poititle": "Markers",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ]
};
